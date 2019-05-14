import React, { Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import HeaderContainer from "../containers/header";
import LoginContainer from "../containers/login";
import DashboardContainer from "../containers/dashboard";
import ListingContainer from "../containers/listing";
import UpdateProfileContainer from "../containers/updateP";

import { Switch, Router, Route, HashRouter, BrowserRouter } from 'react-router-dom';


class MainContainer extends Component{

    render(){
        return(
            <React.Fragment>
            <HeaderContainer/>
            <section>
                <BrowserRouter>
                        <Switch>
                           
                            <Route path="/dashboard" component={ListingContainer} />
                            <Route path='/newslisting' component={ListingContainer}></Route>
                            <Route path='/updateprofile' component={DashboardContainer}></Route>
                            <Route path='/contact' component={DashboardContainer}></Route>
                            <Route exact path="/" component={LoginContainer} />
                        </Switch>
                </BrowserRouter>
            </section>
        </React.Fragment>
        )
    }
}

export default MainContainer;




