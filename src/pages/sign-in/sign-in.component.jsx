import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from '../../components/custom-button/custom-button.component';
import './sign-in.styles.scss';
import google from '../../google.png';
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";

import { withRouter } from 'react-router';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event  => {
        event.preventDefault();

        const { email, password } = this.state;
        const { history } = this.props;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
            history.push('/');
        } 
        catch (error) {
            console.log(error);
        }

        
    }

    handleChange = event => {
        const { value , name } = event.target;

        this.setState({ [name]: value})
    }

    render (){
        return(
            <div className="sign-in-item">
                <div className="sing-in">
                <h2>Sign In</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        onChange={this.handleChange} 
                        value={this.state.email} 
                        label="Email"
                        required 
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        onChange={this.handleChange} 
                        value={this.state.password} 
                        label="Password"
                        required 
                    />
                    <div className="buttons">
                        <CustomButton type="submit" >Sign In</CustomButton>
                    </div>
                    <div className="google">
                        Or
                        <div className="google-sign-in" >
                            <img src={google} alt='google' className="google-img" />
                            <div className="sign-in-with-google" onClick={signInWithGoogle}>
                                Sign in with Google
                            </div>
                        </div>
                    </div>
                    <div className="new-account">
                        <span>Don't have an account ?</span>
                        <Link className="sign-up-now" to='/sign-up'>Sign up now</Link>
                    </div>
                </form>
            </div>
            </div>
        )
    }

}

export default withRouter(SignIn);