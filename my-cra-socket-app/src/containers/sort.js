import React, { Component } from "react";
import css from "../styles/search.css";

import SortNewsComponent from "../components/sort_comp";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class SortContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
        
        }
    }

    render(){
        return(
            <React.Fragment>
                <SortNewsComponent/>
            </React.Fragment>
        )
    }
}

export default SortContainer;





