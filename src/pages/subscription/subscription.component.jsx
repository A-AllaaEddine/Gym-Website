import React from "react";

import './subscription.styles.scss';

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSelectedPackage, selectGymName, selectSelctedDate, selectPackageType } from "../../redux/sub/sub.selector";


class Subsription extends React.Component {
    constructor() {
        super();
    }


    render() {
        const { selectedPackage, selectedDate, packageType, gymName } = this.props;
        return(
            <div className="subscription">
                <div className="Top">
                    <div>My Plans</div>
                </div>
                <div className="Mid">
                    
                </div>
                <div className="Bottum">

                </div>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    selectedPackage: selectSelectedPackage,
    selectedDate: selectSelctedDate,
    packageType: selectPackageType,
    gymName: selectGymName,
})

export default connect(mapStateToProps)(Subsription);