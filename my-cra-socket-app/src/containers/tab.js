import React, { Component } from "react";
import css from "../styles/search.css";

import TabComponent from "../components/tab_comp";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { TabTypeHandler } from '../actions/tab_type_action';

class TabContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
        
        }
    }

    render(){
        return(
            <React.Fragment>
                <TabComponent {...this.props}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({TabType : state.TabType, SearchText : state.SearchText})
const mapDispatchToProps = (dispatch) => bindActionCreators({ TabTypeHandler: TabTypeHandler }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TabContainer);





