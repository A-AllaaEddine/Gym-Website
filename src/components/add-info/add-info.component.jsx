import React from "react";

import './add-info.styles.scss';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle, createUserProfileDocument } from "../../firebase/firebase.utils";

class AddInfo extends React.Component {
    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { firstName, lastName , phone } = this.state ;

        try {
            const { user } = await signInWithGoogle();
            console.log(user.uid);

            await createUserProfileDocument(user , {firstName, lastName, phone} );

            this.setState ({
                firstName: '',
                lastName: '',
                phone: ''
            })     
        }
        catch (error) {
            
        }
    }
        
    

    handleChange = event => {
        const { value , name } = event.target;

        this.setState({ [name]: value})
    }

    render() {
        const { firstName, lastName, phone } = this.state;
        return(
            <div className="addName">
                <form className="forms" onSubmit={this.handleSubmit}>
                    <div className="info">
                        <span>Please Complete your Infos</span>
                    </div>
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
                        name="phone" 
                        type="text" 
                        onChange={this.handleChange} 
                        value={phone} 
                        label="Phone"
                        required 
                    />
                    
                        <div className="button">
                            <CustomButton type="submit" onClick={() => this.handleSubmit} >Next</CustomButton> 
                        </div>  
                    </form>
            </div>
        )
    }
}
    

export default AddInfo;