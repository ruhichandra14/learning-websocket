import React, { Component } from 'react';
import css from "../styles/sort.css";


// api - https://api.myjson.com/bins/cb4wi

class SortNewsComponent extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <React.Fragment>
                <div className = "sort-filter-container">
                <button className = "sort-option">Sort</button>
                <button className = "sort-option">Filter</button>
                </div>
            </React.Fragment>
        )
    }
}

export default SortNewsComponent;