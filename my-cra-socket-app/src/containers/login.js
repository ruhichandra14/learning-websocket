import React, { Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import LoginComponent from "../components/login_comp";
import { userLoginHandler } from '../actions/login_action';


class LoginContainer extends Component{

    render(){
			return(
				<React.Fragment>
							<LoginComponent {...this.props}/>
				</React.Fragment>
			)
    }
}


const mapStateToProps = (state) => {
	return {
		IsUserLoggedIn: state.IsUserLoggedIn
	}
  }


function mapDispatchToProps(dispatch){
	return bindActionCreators({userLoginHandler : userLoginHandler}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

