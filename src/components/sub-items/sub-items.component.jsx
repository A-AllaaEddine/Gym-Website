import React from "react";

import { withRouter } from "react-router";

import CheckMark from '../../checkmark.png';
import CustomButton from "../custom-button/custom-button.component";

import './sub-items.styles.scss';

class SubItems extends React.Component {


    render() {
        const { sub, history } = this.props;
        const { title, price, advantages } = sub;
        
        
        return(
            <div className="sub-items">
            <div className="content">
            <div className="item-top">
                <h2 className="item-title">{title}</h2>
                <span className="price">from <b>{price}</b> a month</span>
            </div>
            <div className="item-mid">
            {
                advantages.map(item => (
                    <div className="advantages" key={item.id}>
                        <h3 className="advantage-name"><img src={CheckMark} alt="check mark"/>{item.name}</h3>
                        <div className="advantage-description">
                            <span >{item.description}</span>
                        </div>
                    </div>
                ))
            }
            </div>
            <div className="item-bottom">
                <CustomButton offer onClick={() => {history.push('/join'); }} >CHOSE OFFER</CustomButton>
            </div>
        </div>
    </div>
        
    
    )}
}


export default withRouter(SubItems);