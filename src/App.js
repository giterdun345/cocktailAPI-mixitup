import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import { QueryClient, QueryClientProvider} from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
// components 
const Landing = lazy(()=> import('./landing/Landing'));
const CocktailList = lazy(()=> import('./cocktails/CocktailList'));
const CocktailDetail = lazy(()=> import('./cocktails/CocktailDetail'));
const SearchResults = lazy(()=> import('./search/SearchResults'));
const IngredientsList = lazy(()=> import('./ingredients/IngredientsList'));
const IngredientDetail = lazy(()=> import('./ingredients/IngredientDetail'));



function App() {
  
 const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
 })

  return (
    <Router>  
      <Suspense fallback={(<div className="lds-hourglass"></div>)}> 
        <Switch>
            <QueryClientProvider client={queryClient}>
              <Route exact path='/' component={Landing} />
              <Route exact path='/Cocktails' component={CocktailList} />
              <Route exact path='/Cocktails/first-letter=:firstletter' component={CocktailList} />
              <Route exact path='/names-detail/:nameid' component={CocktailDetail} />
              <Route path='/search-name/:name' component={SearchResults} />
              <Route exact path='/ingredients' component={IngredientsList} />
              <Route exact path='/ingredients-detail/:ingredient' component={IngredientDetail} />
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
