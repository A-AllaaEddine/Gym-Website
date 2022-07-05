import React from 'react';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import SignIn from './pages/sign-in/sign-in.component';
import SignUp from './pages/sign-up/sign-up.component';
import AddInfo from './components/add-info/add-info.component';
import Subscription from './pages/subscription/subscription.component';

import { auth, createUserProfileDocument,  getUserSub} from './firebase/firebase.utils';
import { connect } from 'react-redux'; 
import { setCurrentUser, setUserAuth } from './redux/user/user.actions';
import { setGymName, setPackageType, setSelectedPackage, setSelectedDate } from './redux/sub/sub.actions';

import Subscriptions from './pages/subscriptions/subscriptions.component';
import JoinPage from './pages/join/join.component';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';



class App extends React.Component {

  unsubscribeFromAuth = null;
  
  
  componentDidMount () {
    const { setCurrentUser, setUserAuth, setGymName, setPackageType, setSelectedPackage, setSelectedDate } = this.props;
    

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {

        setUserAuth(userAuth);

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
        });
          
        });

        const userSub = await getUserSub(userAuth);
        if (userSub)  {
          //console.log(userSub);
          setGymName(userSub.gymName);
          setPackageType(userSub.packageType);
          setSelectedDate(userSub.selectedDate);
          setSelectedPackage(userSub.selectedPackage);
        }
      }
      else {
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render() {
    const { currentUser } = this.props;
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/sign-up-add-info' component={AddInfo} />
          <Route path='/sign-in' 
          render={() => 
            currentUser  ? (
              <Redirect to='/' />
            ) : (
              <SignIn/>
            )
          }  
          />
          <Route path='/sign-up' 
          render={() => 
            currentUser  ? (
              <Redirect to='/' />
            ) : (
              <SignUp/>
            )
          } 
          />
          <Route path='/subscriptions' component={Subscriptions} />
          <Route path='/join' component={JoinPage} />
          <Route path='/subscription' 
          render={() => 
            !currentUser  ? (
              <Redirect to='/' />
            ) : (
              <Subscription/>
            )
          } 
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToPros = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setGymName: gymName => dispatch(setGymName(gymName)), 
  setPackageType: packageType => dispatch(setPackageType(packageType)), 
  setSelectedPackage :selectedPackage => dispatch(setSelectedPackage(selectedPackage)), 
  setSelectedDate: selectedDate => dispatch(setSelectedDate(selectedDate)),
  setUserAuth: userAuth => dispatch(setUserAuth(userAuth))
})

export default connect(mapStateToPros, mapDispatchToProps)(App);
