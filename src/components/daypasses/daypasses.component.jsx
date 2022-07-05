import React from "react";

import './daypasses.styles.scss';

import Info from '../../info.png';

import DayPass from "../day-pass/day-pass.component";
import CustomButton from "../custom-button/custom-button.component";
import CalendarDrownDown from "../calendar-dropdown/calender-dropdown.component";

import { connect } from "react-redux";
import { selectSelectedPackage, selectCalendarHidden, selectSelctedDate, selectPackageType, selectGymName } from "../../redux/sub/sub.selector";
import { createStructuredSelector } from "reselect";
import { toggleCalendarHidden, setSelectedDate } from "../../redux/sub/sub.actions";
import { createrUserSubscription } from '../../firebase/firebase.utils';
import { selectCurrentUser, selectUserAuth } from '../../redux/user/user.selector';
import { withRouter } from "react-router-dom";

class DayPasses extends React.Component {
    constructor() {
        super();

        this.state = {

            date:'Today',

            dayPasses: [
                {
                    id: 1,
                    days: "1",
                    price: "6.99"
                },
                {
                    id: 2,
                    days: "3",
                    price: "14.99"
                },
                {
                    id: 3,
                    days: "7",
                    price: "18.99"
                },
                {
                    id: 4,
                    days: "30",
                    price: "37.99"
                }
            ]
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
        const { selectedPackage, calendarHidden, toggleCalendarHidden, selectedDate, setSelectedDate } = this.props;
        const { dayPasses, date } = this.state;
        const today = new Date().toDateString();
        if (selectedDate === null  || (selectedDate === today)) {setSelectedDate(today);}

        return(
            <div className="daypasses">
                <span className="select-day-pass">Your selected gym offers serval day-pass options, select the one that suits you best</span>
                <div className="day-options">
                    {
                        dayPasses.map( dayPass => (
                            <DayPass key={dayPass.id} dayPass={dayPass}  selectedPackage={selectedPackage}/>
                        ))
                    }
                </div>
                <div className="days-info">
                    <div className="info">
                        <img src={Info} alt='info' />
                    </div>
                    <span>Multi-day passes must be used on consecutive days.</span>
                </div>
                
                {
                    selectedPackage ? 
                    (<div className="customize-time">
                        <div className="date">
                        <span>Start date:</span>
                        <div className="start-date">
                            <span>{ (selectedDate && selectedDate !== today) ? selectedDate : date }</span>
                            <span className="delay" onClick={() => toggleCalendarHidden()} >delay your start date</span>
                            { calendarHidden ? <CalendarDrownDown /> : null}
                        </div>
                        <hr/>
                        <span>Total:</span>
                        <span>{selectedPackage ? `€${selectedPackage.price}` : '€0'}</span>
                        </div>
                        <form onSubmit={this.handleSubmit} >
                            <div className="continue">
                                <CustomButton  type="submit" >Continue</CustomButton>
                            </div>
                        </form>
                    </div>) 
                    : null
                }
            </div>
        )
    }
}


const mapStateToProps = createStructuredSelector({
    selectedPackage: selectSelectedPackage,
    calendarHidden: selectCalendarHidden,
    selectedDate: selectSelctedDate,
    packageType: selectPackageType,
    currentUser: selectCurrentUser,
    gymName: selectGymName,
    userAuth: selectUserAuth
})

const mapDispatchToProps = dispatch => ({
    toggleCalendarHidden: calendarHidden => dispatch(toggleCalendarHidden(calendarHidden)),
    setSelectedDate: selectedDate => dispatch(setSelectedDate(selectedDate))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DayPasses));