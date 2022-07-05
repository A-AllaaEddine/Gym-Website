import React from "react";

import { withRouter } from "react-router";

import './user-dropdown.styles.scss';

import { auth } from "../../firebase/firebase.utils";

import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { showUserDropDown } from "../../redux/user/user.actions";


const UserDropDown = ({ currentUser, showUserDropDown, history}) => (
    <div className="user-dropdown">
        { 
            currentUser ? 
            ( <div className="user-in">
                <h4>{currentUser ? currentUser.firstName : null}</h4><span>{currentUser ? currentUser.email : null}</span>
                <div className="option">
                    Profile
                </div>
                <div className="option">
                     Wish List
                </div>
                <div className="option">
                   Cart
                </div>
                <div className="option" onClick={() => {showUserDropDown(); history.push(`/subscription`);}}>
                   Subscriptions
                </div>
                <div className="option" onClick={() => {showUserDropDown(); auth.signOut();}}>
                    Log Out
                </div>
            </div>)
             : 
             (<div className="user-out">
                    <div className="option" onClick={() => {showUserDropDown(); history.push('/sign-in')}}>
                        Sign In
                    </div>
             </div>)
        }
    </div>
)


const mapDispatchToProps = dispatch => ({
    showUserDropDown: user => dispatch(showUserDropDown(user))
  })

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDropDown));