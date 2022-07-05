import React from "react";
import './sign-up.styles.scss';

import { Link } from "react-router-dom";

import {auth , createUserProfileDocument, createrUserSubscription } from '../../firebase/firebase.utils';

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { withRouter } from "react-router";
import Select from 'react-select';

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSelectedPackage, selectGymName, selectSelctedDate, selectPackageType } from "../../redux/sub/sub.selector";

import b1 from '../../b1.jpg';
import b2 from '../../b2.jpg';
import google from '../../google.png';

class SignUp extends React.Component{
    
    constructor(){
        super();

        this.state = {
            firstName: '',
            lastName: '',
            email : '',
            phone: '',
            password : '',
            postCode: '',
            gender: '',
            dayOfBirth: '',
            monthOfBirth: '',
            yearOfBirth: '',
            dateOfBirth: '',
            agreedTerms: false,

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

    handleSubmit = async event => {
        event.preventDefault();

        const { firstName, lastName , email, phone, password, gender, dayOfBirth, monthOfBirth, yearOfBirth } = this.state ;

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email , password);
            const {selectedPackage, selectedDate, packageType, gymName} = this.props;

            await createUserProfileDocument(user ,  {firstName, lastName , phone, gender, dayOfBirth, monthOfBirth, yearOfBirth} );
            await createrUserSubscription(user, packageType, {selectedPackage, selectedDate,  gymName});

            this.setState ({
                firstName: '',
                lastName: '',
                email : '',
                phone: '',
                password : '',
                postCode: '',
                gender: '',
                dayOfBirth: '',
                monthOfBirth: '',
                yearOfBirth: '',
                dateOfBirth: '',
                agreedTerms: false,
                
            })     
        }
        catch (error) {
            
        }
        const {history} = this.props;
        history.push('/subscription');
    }

    handleChange = event => {
        const { name , value } = event.target;
        this.setState({ [name] : value });
    }

    handleGenderChange = event => {
        const { value } = event;

        this.setState({
            gender: value
        });
    }
    
    render(){

        const { firstName, lastName , email, phone,  password, postCode, dayOfBirth, monthOfBirth, yearOfBirth, genderList } = this.state;
        const { history } = this.props;
        const options = (

            genderList.map(gender => (
                { value: gender.name, label: gender.name}
            ))
        )

        return(
            <div className="sign-up">
                <div className="left">
                    <img src={b2} alt="left-banner" className="img" />
                </div>



                <div className="mid">
                    <div className="title">
                        <span >Sign Up for new Account</span>
                    </div>
                    

                    <form className="forms" onSubmit={this.handleSubmit}>
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
                        <div className="button">
                            <CustomButton type="submit"  >Sign Up</CustomButton> 
                        </div>  
                    </form>

                  
                    <div className="google">
                        Or
                        <div className="google-sign-in" >
                            <img src={google} alt='google' className="google-img" onClick={() => history.push('/sign-up-add-info')}/>
                            <div className="sign-in-with-google" onClick={() => history.push('/sign-up-add-info')}>
                                Sign in with Google
                            </div>
                        </div>
                    </div> 

                    <div className="have-account">
                        <span>Already Have an Account ?</span>
                        <Link className="sign-in-now" to='/sign-in'>Sign in Now</Link>
                    </div>
                </div>
                <div className="right">
                <img src={b1} alt="right-banner" className="img" />
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


export default withRouter(connect(mapStateToProps)(SignUp)) ;