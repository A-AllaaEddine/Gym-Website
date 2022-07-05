import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import { connect } from "react-redux";
import { setSelectedPackage } from "../../redux/sub/sub.actions";

import './sub.styles.scss';


class Sub extends React.Component {
    constructor() {
        super();
        this.state = {
            checked: false
        }
    }

    render () {

        const { sub, selectedPackage, setSelectedPackage } = this.props;
        return(
            <div key={sub.id} className={`${ (setSelectedPackage === sub) ? 'checked' : null} sub` }>
                                    <div className="ttitle">{sub.title}{sub.price}</div>
                                    <div className="subsciption">
                                        {sub.advantages.map(adv => (
                                            <div key={adv.id} className="status">
                                                {adv.status}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="select-botton">
                                        {
                                            (selectedPackage === sub) 
                                            ? 

                                            <CustomButton checked>&#10004;</CustomButton>

                                            :

                                            <CustomButton offer  onClick={() => {
                                                setSelectedPackage(sub);
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

export default connect(null, mapDispatchToProps)(Sub);