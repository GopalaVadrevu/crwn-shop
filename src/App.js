import './App.css';

import HomePage from '../src/pages/homepage/homepage.component.jsx'
import ShopPage from '../src/pages/shop/shop.component.jsx';
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>

    </Switch>
  
  

    </div>
  )
}

export default App;
