import React from "react";

import './package.styles.scss';



import { connect } from "react-redux";
import { selectPackageType } from "../../redux/sub/sub.selector";
import { createStructuredSelector } from "reselect";

import { withRouter } from "react-router-dom";

import DayPasses from "../daypasses/daypasses.component";
import MonthlyMembership from "../monthly-membership/monthly-membership.component";




const Package = ({ packageType, history }) => (
    <div id="package"  className="package">
        {
            (packageType === null)
            ?
            history.push('/join')
            :
            null
        }
        {
            (packageType === 'Day Passes')
             ? 
            <DayPasses />
            :
            <MonthlyMembership />
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    packageType: selectPackageType
})



export default withRouter(connect(mapStateToProps)(Package));