import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { selectCurrentUser, showDropDown } from '../../redux/user/user.selector';
import { createStructuredSelector } from "reselect";
import { showUserDropDown } from "../../redux/user/user.actions";

import {ReactComponent as Logo}  from '../../04012019-07.svg';
import {ReactComponent as User} from '../../user.svg';
import {ReactComponent as Facebook} from '../../facebook.svg';
import {ReactComponent as Twitter} from '../../twitter.svg';
import {ReactComponent as Instagram} from '../../instagram.svg';

import UserDropDown from "../user-dropdown/user-dropdown.component";

import './header.styles.scss';


const Header = ({hidden, showUserDropDown}) => {
    return(
    <div className="header">
            <div className="left-header">
                <Link className="logo-container" to='/' >
                    <Logo className="logo" />
                </Link>
                <div className="gym-header">
                    GYM
                </div>
            </div>
            <div className="mid-header">
                <Link className="home" to='/'>
                    Home
                </Link>
                <Link className="about-us" to='/about-us'>
                    About Us
                </Link>
                <Link className="subs" to='/subscriptions'>
                    Subscriptions
                </Link>
                <Link className="contact" to='/contact'>
                    Contact Us
                </Link>
            </div>
            <div className="right-header">
                <div className="facebook-container">
                    <Facebook className="facebook"/>
                </div>
                <div className="twitter-container">
                    <Twitter className="twitter"/>
                </div>
                <div className="instagram-container">
                   <Instagram className="instagram"/>
                </div>
                <div className="user-container">
                    <User className="user" onClick={() => ( showUserDropDown() )}/>
                </div>
                {
                    hidden ? null : <UserDropDown/>
                }
            </div>
    </div>
)}
const mapDispatchToProps = dispatch => ({
    showUserDropDown: () => dispatch(showUserDropDown())
})

const mapStateToProps = createStructuredSelector({
    hidden: showDropDown,
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);