import React, { Component } from "react";
import css from "../styles/header.css";
import NavigationContainer from "../containers/navigation";

export default class HeaderComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            IsMenuActive : this.props.IsNavigationMenuClicked
        }
        this.navBtnOnClickHandler = this.navBtnOnClickHandler.bind(this);
    }

    navBtnOnClickHandler(){
        this.setState({IsMenuActive: !this.state.IsMenuActive});
        let isMenuActive = this.state.IsMenuActive;
        this.props.menuClickHandler(isMenuActive);
    }


    render(){
        const isUserLoggedIn = this.props.IsUserLoggedIn;
        let headerOptions, navigationIcon;
        let navMenuClass = this.state.IsMenuActive ? "navigation-menu-icon nav-menu-active" : "navigation-menu-icon";
        if(isUserLoggedIn == "success"){
            headerOptions = <span className = "user-info"><button className = "user-profile-photo"></button><ul className = "user-profile-options"><li>Profile</li><li>Logout</li></ul></span>
            navigationIcon = <img src = "http://www.stickpng.com/assets/images/588a64e0d06f6719692a2d10.png" className = {navMenuClass} onClick = {this.navBtnOnClickHandler}/>
        }
        else{
            headerOptions = "";
            navigationIcon = "";
        }

        return(
            <header className = "page-header">
                {navigationIcon}
                {(isUserLoggedIn === "success") && <NavigationContainer/>}
                <a className = "website-name" href= "/">Your NewsFinder!</a>
                {headerOptions}
            </header>
        )
    }
}





