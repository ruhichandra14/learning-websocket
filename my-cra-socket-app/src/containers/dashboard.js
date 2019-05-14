import React, { Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getChartTypeClasses } from '../actions/chart_type_action';
import DashboardComponent from "../components/dashboard_comp";

class DashboardContainer extends Component{
    render(){
        return(
               <DashboardComponent {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({IsUserLoggedIn: state.IsUserLoggedIn, ChartClasses: state.ChartClasses})
const mapDispatchToProps = (dispatch) => bindActionCreators({getChartTypeClasses : getChartTypeClasses}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
