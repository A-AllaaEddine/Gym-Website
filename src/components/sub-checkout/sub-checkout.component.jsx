import React from "react";

import './sub-checkout.styles.scss';

import { connect } from "react-redux";
import { createStructuredSelector   } from "reselect";
import { selectGymName, selectPackageType, selectSelectedPackage, selectSelctedDate } from "../../redux/sub/sub.selector";
import { setGymName, setPackageType, clearSub } from "../../redux/sub/sub.actions";

import StripeCheckoutButton from '../stripe-button/stripe-button.component';

import { Link } from "react-router-dom";


const SubCheckout = ({ gymName, packageType, selectedDate, selectedPackage, clearSub }) => {
    return (
        <div className="sub-checkout">
            <div className="gym-package">
                <div className="home-gym">
                    <span>Your home gym will be:  </span>
                    <span>
                        {gymName}
                    </span>
                    <Link to="/join" className="edit" onClick={() => clearSub()} >Edit</Link>
                </div>
                <hr/>
                <div className="membership-type">
                    <span>Your membership type: </span>
                    <div>
                    {packageType}
                    </div>
                    <Link to="/join"  className="edit" onClick={() => clearSub()} >Edit</Link>
                </div>
                <hr/>
            </div>
            <div className="gym-package">
                <div className="home-gym">
                    <span>Start Date:  </span>
                    <span>
                        {selectedDate}
                    </span>
                    <Link to="/join" className="edit" onClick={() => clearSub()} >Edit</Link>
                </div>
                <hr/>
            </div>
            <div className="total-price">
                    <span>Total amount to pay: </span>
                    <div className="total-amount">
                    € {selectedPackage.price}
                    </div>
            </div>
            <StripeCheckoutButton price={selectedPackage.price} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    gymName: selectGymName,
    packageType: selectPackageType,
    selectedPackage: selectSelectedPackage,
    selectedDate: selectSelctedDate
})

const mapDispatchToProps = dispatch => ({
    setGymName: gymName => dispatch(setGymName(gymName)),
    setPackageType: packageType => dispatch(setPackageType(packageType)),
    clearSub : () => dispatch(clearSub())
})

export default connect(mapStateToProps, mapDispatchToProps)(SubCheckout);