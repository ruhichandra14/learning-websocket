import React, { Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';

import { menuClickHandler } from '../actions/nav_menu_action';
import HeaderComponent from "../components/header_comp";

class HeaderContainer extends Component{

    render(){
        return(
            <HeaderComponent {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    IsUserLoggedIn : state.IsUserLoggedIn,
    IsNavigationMenuClicked : state.IsNavigationMenuClicked
})

const mapDispatchToProps = (dispatch) => bindActionCreators({menuClickHandler : menuClickHandler}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);


