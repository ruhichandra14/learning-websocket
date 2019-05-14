import React, { Component } from 'react';
//import ListingComponent from "../components/listing_comp";
import UpdateProfileComponent from "../components/update_profile_comp";

// api - https://api.myjson.com/bins/cb4wi

class UpdateProfileContainer extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <div><UpdateProfileComponent/></div>
        )
    }
}

export default UpdateProfileContainer;