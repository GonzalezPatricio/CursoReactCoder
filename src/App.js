import './App.css';
import {NavBar } from './components/navBar/NavBar';
import { ItemListContainer } from './components/Home/Home';
// import {CountCountainer } from './components/Count/CountContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import  {ItemDetailContainer}  from './components/Item/ItemDetailContainer';

function App() {

  return (
    <div className="App">
       <BrowserRouter>
        <NavBar/>    
       <Switch>
      <Route path='/Home'> <ItemListContainer/></Route>
      <Route path='/Item/:id'> <ItemDetailContainer /></Route>
      <Route path= '/Category/:id'> <ItemListContainer /> </Route>
      {/* <Route path='/CountContainer'> <CountCountainer stock={5} initial={1}/> </Route> */}
      <Route path exact='/'><ItemListContainer/></Route>
     </Switch>
     </BrowserRouter>
    </div>
    
  );
}

export default App;
