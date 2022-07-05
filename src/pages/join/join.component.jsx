import React from "react";

import './join.styles.scss';

import { Route } from "react-router-dom";

import Package from "../../components/package/package.component";
import Details from "../../components/details/details.component";
import SubCheckout from "../../components/sub-checkout/sub-checkout.component";
import Gym from '../../components/gym/gym.component';


const JoinPage = ({ match }) => (
    <div className="join">
        <div className="top">
            <h1 className="title">Customise your plan</h1>
            <div className="options">
                <div className="option">
                    <div className="icon"/>
                    <span className="text">Your gym</span>
                </div>
                <div className="option">
                    <div className="icon"/>
                    <span className="text">Your plan</span>
                </div>
                <div className="option">
                    <div className="icon"/>
                    <span className="text">Your details</span>
                </div>
                <div className="option">
                    <div className="icon"/>
                    <span className="text">Payment</span>
                </div>
            </div>
            <hr/>
        </div>
        <div className="bottom">
            <Route 
            exact path={`${match.path}`} 
            component={Gym} 
            />
            <Route 
            exact path={`${match.path}/package`} 
            component={Package} 
            />
            <Route 
            exact path={`${match.path}/details`} 
            component={Details} 
            />
            <Route 
            exact path={`${match.path}/sub-checkout`} 
            component={SubCheckout} 
            />
        </div>
    </div>
)




export default JoinPage;