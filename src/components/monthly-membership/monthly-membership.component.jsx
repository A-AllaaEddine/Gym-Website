import React from "react";

import './monthly-membership.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectSelctedDate, selectSelectedPackage, selectPackageType, selectGymName } from "../../redux/sub/sub.selector";
import { setSelectedDate } from "../../redux/sub/sub.actions";
import { withRouter } from "react-router-dom";
import { selectCurrentUser, selectUserAuth } from '../../redux/user/user.selector';
import { createrUserSubscription } from '../../firebase/firebase.utils';

import CustomButton from "../custom-button/custom-button.component";

import { advantagesList, Subs } from '../../redux/directory/directory.data';

import Sub from "../sub/sub.component";


class MonthlyMembership extends React.Component {
    constructor(){
        super();

        this.state = {
            subs: Subs,
            advantagesList: advantagesList
        }
    }

    handleSubmit = async event  => {
        event.preventDefault();


            const {userAuth, history, selectedPackage, selectedDate, packageType, gymName, currentUser} = this.props;

            if (currentUser) {
                try {
                    await createrUserSubscription(userAuth, packageType, { selectedPackage, selectedDate,  gymName});
                }
                catch(error) {

                }
                history.push('/subscription');
            }
            else {
                history.push('/sign-up');
            }
    }

    render() {
        const { subs, advantagesList } = this.state;
        const { selectedPackage, selectedDate, setSelectedDate } = this.props;
        const today = new Date().toDateString();
        if (selectedDate === null  || (selectedDate === today)) {setSelectedDate(today);}
        return(
            <div className="monthly-membership">
                <span>Get the membership that suits you</span>
                <div className="offer-container">
                    <div className="advantageslist">
                        <div className="empty1"></div>
                        {
                            advantagesList
                            .filter((item, id) => id !== 5)
                            .map((item) => (
                                <div key={item.id} className="advantage-item">
                                    <div>
                                        {item.name}
                                    </div>
                                </div>
                            ))
                        }
                        <div className="empty2"></div>
                    </div>
                    <div className="subs">
                        {
                            subs.map( sub => (
                                <Sub key={sub.id} sub={sub} selectedPackage={selectedPackage}/>
                            ))
                        }
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                <div className="continue">
                    <CustomButton disabled={(selectedPackage) ? false : true}  type="submit" >Continue</CustomButton>
                </div>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    selectedDate: selectSelctedDate,
    currentUser: selectCurrentUser,
    selectedPackage: selectSelectedPackage,
    packageType: selectPackageType,
    gymName: selectGymName,
    userAuth: selectUserAuth
})

const mapDispatchToProps = dispatch => ({
    setSelectedDate: selectedDate => dispatch(setSelectedDate(selectedDate))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MonthlyMembership));