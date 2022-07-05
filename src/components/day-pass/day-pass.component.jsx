
import React from "react";

import CustomButton from '../custom-button/custom-button.component';

import { connect } from "react-redux";
import { setSelectedPackage } from '../../redux/sub/sub.actions';

import './day-pass.styles.scss';


class DayPass extends React.Component {
    constructor() {
        super();

        this.state = {
            checked: false
        }
    }


    render () {
        const { dayPass,  setSelectedPackage, selectedPackage } = this.props;
        const { days, price } = dayPass;

        return(

            <div className={`${ (selectedPackage === dayPass) ? 'checked' : null} day-pass`}>
                <div className="days">
                    {days} DAY PASS
                </div>
                <div className="pass-price">
                    € {price}
                </div>
                <div className="select-botton">
                {
                    (selectedPackage === dayPass) 
                    ? 

                    <CustomButton checked>&#10004;</CustomButton>

                    :

                    <CustomButton offer  onClick={() => {
                        setSelectedPackage(dayPass);
                        document.getElementById('package').scrollIntoView({behavior: 'smooth'});
                    }} >Select</CustomButton>
                }
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    setSelectedPackage : selectedPackage => dispatch(setSelectedPackage(selectedPackage))
})

export default connect(null, mapDispatchToProps)(DayPass);