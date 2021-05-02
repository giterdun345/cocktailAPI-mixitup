import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Landing from './landing/Landing';
import Random from './reusables/Random';
import RandomList from './RandomList';
import NamesList from './NamesList';
import Header from './header/Header';
import NameDetail from './NameDetail';

function App() {
  return (
    <Router>  
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/random' component={Random} />
          <Header dark={true}>
          <Route exact path='/randomList' component={RandomList} />
          <Route exact path='/Names' component={NamesList} />
          <Route exact path='/names-detail/:nameid' coponents={NameDetail} />
          {/* <Route exact path='/Ingredients' coponents={IngredientList} />
          <Route exact path='/Ingredients-list' coponents={IngredientDetail} />
          <Route exact path='/alphalist' coponents={AlphaList} /> */}
          </Header>
        </Switch>
      </div>     
    </Router>
  );
}

export default App;
