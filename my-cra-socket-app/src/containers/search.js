import React, { Component } from "react";
import css from "../styles/search.css";

import SearchComponent from "../components/search_comp";
import { newsSearchHandler } from '../actions/search_action';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class SearchContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
        
        }
    }

    render(){
        return(
            <React.Fragment>
                <SearchComponent {...this.props}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({SearchText : state.SearchText})
const mapDispatchToProps = (dispatch) => bindActionCreators({ newsSearchHandler : newsSearchHandler},dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);





