import React from 'react';

import './App.css';

import HomePage from '../src/pages/homepage/homepage.component'
import ShopPage from '../src/pages/shop/shop.component';
import Header from '../src/components/header/header.component'
import SignInOrRegister from '../src/pages/sign-in-register/sign-in-register.component'
import {Route, Switch} from 'react-router-dom';
import {auth,createUserProfileDocument} from '../src/firebase/firebase.utils';



class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state ={
      currentUser: null
    }
  }
  
  unsubscribefromAuth= null

  componentDidMount(){
    //firebase Auth object gets the information of user change based on this method. This is subscribed to listen to the changes
      this.unsubscribefromAuth=auth.onAuthStateChanged(async user=> {
          createUserProfileDocument(user);
          console.log(user)
        if(user){
            this.setState ({currentUser: user.displayName});
        }
      })
     
    }

  

  componentWillUnmount(){
      // unsubscribe post the component is not active anymore
      this.unsubscribefromAuth();
  }


  render(){
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInOrRegister}/>
        
        </Switch>
        </>
    )
  }
}

export default App;
