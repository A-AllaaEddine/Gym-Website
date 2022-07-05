import React from "react";

import './calendar-dropdown.styles.scss';

import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

import { connect } from "react-redux";
import { setSelectedDate, toggleCalendarHidden } from "../../redux/sub/sub.actions";


const CalendarDrownDown = ({ setSelectedDate, toggleCalendarHidden }) => {


        return(
            <div className="calendar-dropwdown">
                <Calendar onChange={(e) => {setSelectedDate(e.toDateString()); toggleCalendarHidden();}} />
            </div>
        )
}

const mapDispatchToProps = dispatch => ({
    setSelectedDate: selectedDate => dispatch(setSelectedDate(selectedDate)),
    toggleCalendarHidden: calendarHidden => dispatch(toggleCalendarHidden(calendarHidden))
})

export default connect(null, mapDispatchToProps)(CalendarDrownDown);