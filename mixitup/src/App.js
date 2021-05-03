import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Landing from './landing/Landing';
import RandomList from './RandomList';
import CocktailList from './CocktailList';
import CocktailDetail from './CocktailDetail';

function App() {
  return (
    <Router>  
      {/* <div clCocktail='container'> */}
      <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/randomList' component={RandomList} />
          <Route exact path='/Cocktails' component={CocktailList} />
          <Route exact path='/names-detail/:nameid' component={CocktailDetail} />
          {/* <Route exact path='/Ingredients' coponents={IngredientList} />
          <Route exact path='/Ingredients-list' coponents={IngredientDetail} />
          <Route exact path='/alphalist' coponents={AlphaList} /> */}
        </Switch>
      {/* </div>      */}
    </Router>
  );
}

export default App;
