import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import NavigationComponent from "../components/navigation_comp";

class NavigationContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
         
        };
    }

    render(){
        return(
            <NavigationComponent {...this.props}/>
        )
    }
}


const mapStateToProps = (state) => ({IsNavigationMenuClicked: state.IsNavigationMenuClicked})

export default connect(mapStateToProps)(NavigationContainer);
