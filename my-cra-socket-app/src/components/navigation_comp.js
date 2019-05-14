import React, { Component } from "react";
import css from "../styles/navigation.css";

import DashboardContainer from "../containers/dashboard";
import ListingContainer from "../containers/listing";
import UpdateProfileContainer from "../containers/updateP";

import { Switch, Router, Route, HashRouter, BrowserRouter, Link } from 'react-router-dom';


export default class NavigationComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
         
        };
    }


    render(){
        console.log("props-nav-comp ",this.props.IsNavigationMenuClicked);
        let navMenuHTML;
        let routeNavItems;
        if(this.props.IsNavigationMenuClicked){
            navMenuHTML =   <BrowserRouter>
                                <div className = "navigation-container">
                                    <nav className="navigation-list-container">
                                        <ul className = "navigation-list">
                                            <li className = "navigation-item"><Link to = "/newslisting" >News Listing</Link></li>
                                            <li className = "navigation-item"><Link to = "/updateprofile" >Update Profile</Link></li>
                                            <li className = "navigation-item"><Link to = "/contact" >Contact</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </BrowserRouter>
        }
        else{
            navMenuHTML = "";
        }
        return(
            <React.Fragment>
                {navMenuHTML}
            </React.Fragment>
        )
    }
}









/* <div className = "navigation-container">
                                <div className = "navigation-list-container">
                                  
                                </div>
                            </div> */