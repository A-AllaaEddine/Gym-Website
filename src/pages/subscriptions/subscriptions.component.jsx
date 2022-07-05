import React from "react";

import './subscriptions.styles.scss';

import Directory from "../../components/directory/directory.component";



const Subscriptions = () => (
    <div className="subscriptions">
        <div className="top">

            <h1 className="title">Gym Memberships</h1>
            
            <p className="description">Need a monthly membership without a contract,
                 a day pass for a one-off workout <br/>or a membership 
                 that's paid in advance to keep you motivated? <br/>
                 You can choose a membership that's 
                 right for you with our huge range 
                 <br/>of flexible membership options. </p>
        </div>
        <div className="mid">
            <h2 className="title">Monthly Memberships</h2>
            <p className="description">The most popular way to use GYM. Our monthly
                 packages all come with <b>no contract</b>, just the 
                 freedom <br/>to leave whenever you want to. 
                 Get ongoing access to one or more gyms at 
                 a range of <b>price points to suit <br/>every pocket.</b>
            </p>

            <Directory/>
        </div>
    </div>
)

export default Subscriptions;