import React from "react";

import './details.styles.scss';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import Select from 'react-select';

import { connect } from "react-redux";
import { selectPackageType } from "../../redux/sub/sub.selector";
import { createStructuredSelector } from "reselect";

class Details extends React.Component {
    constructor() {
        super();

        this.state = {

            firstName: '',
            lastName: '',
            email: '',
            password:'',
            phone: '',
            postCode: '',
            gender: '',
            dayOfBirth: '',
            monthOfBirth: '',
            yearOfBirth: '',
            dateOfBirth: '',
            agreedTerms: null,

            genderList: [
                {
                    id: 1,
                    name: 'Male'
                },
                {
                    id: 2,
                    name: 'Female'
                }
            ],

            isValid: false
        }
    }

    

    canBeSubmitted = () => {
        const { isValid, firstName, lastName, email, password, phone, postCode, dayOfBirth, monthOfBirth, yearOfBirth, gender} = this.state;
        
        if (firstName.length && 
            email.length && 
            password.length > 8 &&
            lastName.length && 
            phone.length &&
            postCode.length &&
            dayOfBirth.length &&
            monthOfBirth.length &&
            yearOfBirth.length &&
            gender.length)
            {this.setState({ isValid: true});}

        
        console.log({  isValid, email, firstName, lastName, phone, postCode, dayOfBirth, monthOfBirth, yearOfBirth, gender });
    }
    

    handleChange = event => {
        const { value , name } = event.target;
        
        
        this.setState({ [name]: value});

        this.canBeSubmitted();
    }

    handleGenderChange = event => {
        const { value } = event;

        this.setState({
            gender: value
        });
    }

    render() {

        const { isValid, email, password, firstName, lastName, phone, postCode, dayOfBirth, monthOfBirth, yearOfBirth,  genderList } = this.state;
        const { history, packageType } = this.props;

        const options = (

            genderList.map(gender => (
                { value: gender.name, label: gender.name}
            ))
        )

        return(
            <div className="details">
                <form className="forms" onSubmit={this.handleSubmit}>
                {
                    (packageType === null)
                    ?
                    history.push('/join')
                    :
                    null
                }
                        <FormInput 
                            name="firstName" 
                            type="text" 
                            onChange={this.handleChange} 
                            value={firstName} 
                            label="First Name"
                            required 
                        />
                        <FormInput 
                            name="lastName" 
                            type="text" 
                            onChange={this.handleChange}
                            value={lastName} 
                            label="Last Name"
                            required 
                        />
                        <FormInput 
                            name="email" 
                            type="email" 
                            onChange={this.handleChange} 
                            value={email} 
                            label="Email Address"
                            required 
                        />
                        <FormInput 
                            name="password" 
                            type="password" 
                            onChange={this.handleChange} 
                            value={password} 
                            label="Password"
                            required 
                        />
                        <FormInput 
                            name="phone" 
                            type="text" 
                            onChange={this.handleChange} 
                            value={phone} 
                            label="Phone"
                            required 
                        />
                        <FormInput 
                            name="postCode" 
                            type="text" 
                            onChange={this.handleChange} 
                            value={postCode} 
                            label="Post Code"
                            required 
                        />
                        <div className="gender-and-bd">
                            <div className="gender">
                                <label>Gender</label>
                                <div className="gender-input">
                                    <Select options={options} name="gender" className='dropdown' onChange={this.handleGenderChange} />
                                </div>
                            </div>
                            <div className="bd">
                                <label>Date of birth</label>
                                <div>
                                    <input required type="tel" name="dayOfBirth" onChange={this.handleChange} value={dayOfBirth} className="bd-input" maxLength="2" placeholder="DD" title="Please complete with a valid day of the month."/>
                                    <input required type="tel" name="monthOfBirth" onChange={this.handleChange} value={monthOfBirth} className="bd-input" maxLength="2" placeholder="MM" title="Please complete with a valid day of the month."/>
                                    <input required type="tel" name="yearOfBirth" onChange={this.handleChange} value={yearOfBirth} className="bd-input" maxLength="4" placeholder="YYYY" title="Please complete with a valid day of the month."/>
                                </div>
                            </div>
                        </div>
                        <div className="support">
                            <input type="checkbox" name="support" value="support" />
                            <label>We'll send you support, tips and special offers</label>
                        </div>
                        <div className="button" >
                            <CustomButton id="submitButton" disabled={!isValid}  onClick={() => history.push('/join/sub-checkout')} type="submit" >Continue</CustomButton> 
                        </div>
                    </form>

            </div>
        )
    }
} 

const mapStateToProps = createStructuredSelector({
    packageType: selectPackageType
})

export default connect(mapStateToProps)(Details);