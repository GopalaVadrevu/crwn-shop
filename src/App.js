import './App.css';

import HomePage from '../src/pages/homepage/homepage.component'
import ShopPage from '../src/pages/shop/shop.component';
import Header from '../src/components/header/header.component'
import SignInOrRegister from '../src/pages/sign-in-register/sign-in-register.component'
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signin' component={SignInOrRegister}/>

    </Switch>
  
  

    </div>
  )
}

export default App;
