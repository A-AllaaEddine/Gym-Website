import React from "react";

import CustomButton from '../../components/custom-button/custom-button.component';
import gym from '../../data/gym.data';

import Select from 'react-select';

import { withRouter } from "react-router";

import { connect } from "react-redux";
import { setGymName, setPackageType } from "../../redux/sub/sub.actions";

import './gym.styles.scss';

class Gym extends React.Component {

    constructor() {
        super();

        this.state = {
            checked: false,
            gyms: gym,
            selectedGym: null
        }
    }

    handleChange = (event) => {

        const { value } = event;

        this.setState({
            checked: true,
            selectedGym: value
        });
        this.props.setGymName(value);

    }



    render() {
        const { checked, gyms } = this.state;
        

        const options = (

            gyms.map(gym => (
                { value: gym.name, label: gym.name}
            ))
        )


        const { history, match } = this.props;

        return(
            <div className="gym">

                <Select options={options} className='dropdown' onChange={this.handleChange} />

                <div className={`${checked ? 'checked': ''} membership`}>
                    Select a day pass or explore our flexible monthly memberships
                </div>
                <div className={`${checked ? 'checked': ''} select-membership`}>
                    <div className={`${checked ? 'checked': ''} memberships-left`}>
                        <h1 className="membership-title">DAY PASSES</h1>
                        <p>Passess for a signle gym from 1 day to 30 days</p>
                        <span>from <br/><b>€6.99</b><br/> for 1 day</span>
                        <div className="membership-button">
                            <CustomButton offer onClick={() =>{
                                history.push(`${match.path}/package`);
                                this.props.setPackageType('Day Passes');
                                }} >SELECT</CustomButton>
                        </div>
                    </div>
                    <div className={`${checked ? 'checked': ''} memberships-right`}>
                        <h1 className="membership-title">MONTHLY</h1>
                        <p>Ongoing access to one or mulyiple gyms</p>
                        <span>from <br/><b>€20.99</b><br/> a month + €10 joining fee</span>
                        <div className="membership-button">
                            <CustomButton offer onClick={() =>{
                                history.push(`${match.path}/package`);
                                this.props.setPackageType('Monthly Subscription');
                                }} >SELECT</CustomButton>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    setGymName: gymName => dispatch(setGymName(gymName)),
    setPackageType: packageType => dispatch(setPackageType(packageType))
})
    

export default withRouter(connect(null, mapDispatchToProps)(Gym));