import React, { Component } from "react";
import css from "../styles/search.css";

export default class SearchComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
        
        }
        this.searchHandler = this.searchHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.filterSearchText = this.filterSearchText.bind(this);
        this.SearchDebounceFunc = this.debounceFunc(this.searchHandler , 500);
    }

    onChangeHandler = (e) => {
        e.persist();
        this.SearchDebounceFunc(e);
    }

    searchHandler(e){
        let filteredSearchedText = this.filterSearchText(e.target.value);
        this.props.newsSearchHandler(filteredSearchedText);
    }

    // filter out special characters
    filterSearchText(searchedText){
        var regExp = /[^a-zA-Z]/gi ;
        return searchedText.replace(regExp, "");
    }

    // util debounce function 
    debounceFunc(searchHandler, delay){
        let searchFuncTimer;
        return function(){
            const context = this;
            const args = arguments;
            clearTimeout(searchFuncTimer);
            searchFuncTimer = setTimeout(()=>{ searchHandler.apply(context, args) }, delay)
        }
    }

    render(){
        return(
            <React.Fragment>
                <input type = "search" className = "news-search" placeholder = "search by title or category or description" onChange = {this.onChangeHandler}/>
            </React.Fragment>
        )
    }
}





