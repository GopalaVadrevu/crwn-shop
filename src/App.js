import React from 'react';

import './App.css';

import {connect} from 'react-redux';
import {setCurrentUser} from '../src/redux/user/user.actions';

import HomePage from '../src/pages/homepage/homepage.component'
import ShopPage from '../src/pages/shop/shop.component';
import Header from '../src/components/header/header.component'
import SignInOrRegister from '../src/pages/sign-in-register/sign-in-register.component'
import {Route, Switch, Redirect} from 'react-router-dom';
import {auth,createUserProfileDocument} from '../src/firebase/firebase.utils';
import DashBoard from '../src/pages/dashboard/dashboard.page';




class App extends React.Component {
  
  //No construction needed as we are using Redux to set the state


  unsubscribefromAuth= null

  componentDidMount(){

    const {setCurrentUser} = this.props;
    //firebase Auth object gets the information of user change based on this method. This is subscribed to listen to the changes
     this.unsubscribefromAuth = auth.onAuthStateChanged(async userAuth => {
          if (userAuth){
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                   // console.log("App did mount -> ", this.state);
                });
               
          }
          setCurrentUser({userAuth});
     
    });
}

  

  componentWillUnmount(){
      // unsubscribe post the component is not active anymore
      this.unsubscribefromAuth();
  }


  render(){

    return (
     
      <div>
        <Header  />

        <Switch>
          
          <Route exact path='/' component={HomePage}/>
          <Route path='/dashboard' component ={DashBoard}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/signin' render ={()=>this.props.currentUser ? (<Redirect to='/' />) : (<SignInOrRegister/>)} />

        
        </Switch>
        </div>
    )
  }
}

///export default App; - Changed to add the Redux store access
const mapStatetoProps = user =>({
  currentUser: user.currentUser
});

//from app to sstate
const mapDispatchToProps = dispatch => ({

  setCurrentUser: user => dispatch(setCurrentUser(user))

});


export default connect(
      mapStatetoProps,
      mapDispatchToProps)
      (App);
