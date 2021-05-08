import './App.css';

import HomePage from '../src/pages/homepage/homepage.component.jsx'
import ShopPage from '../src/pages/shop/shop.component.jsx';
import {Route, Switch} from 'react-router-dom';
import Header from '../src/components/header/header.component.jsx'

function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>

    </Switch>
  
  

    </div>
  )
}

export default App;
