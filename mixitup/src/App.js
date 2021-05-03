import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import { QueryClient, QueryClientProvider} from "react-query";
// import { ReactQueryDevtools } from "react-query-devtools";
import { ReactQueryDevtools } from 'react-query/devtools'

import Landing from './landing/Landing';
import RandomList from './RandomList';
import CocktailList from './CocktailList';
import CocktailDetail from './CocktailDetail';

function App() {
  const queryClient = new QueryClient()

  return (
    <Router>  
      {/* <div clCocktail='container'> */}
      <Switch>
        <QueryClientProvider client={queryClient}>
          <Route exact path='/' component={Landing} />
          <Route exact path='/randomList' component={RandomList} />
          <Route exact path='/Cocktails' component={CocktailList} />
          <Route exact path='/names-detail/:nameid' component={CocktailDetail} />
          {/* <Route exact path='/Ingredients' coponents={IngredientList} />
          <Route exact path='/Ingredients-list' coponents={IngredientDetail} />
          <Route exact path='/alphalist' coponents={AlphaList} /> */}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>

      </Switch>
    </Router>
  );
}

export default App;
