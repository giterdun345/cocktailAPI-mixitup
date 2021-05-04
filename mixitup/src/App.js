import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import { QueryClient, QueryClientProvider} from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
// const QueryClient = lazy(()=> import ('react-query'))
// const QueryClientProvider = lazy(()=> import('react-query'))
// const ReactQueryDevtools = lazy(()=> import('react-query/devtools'));
// components 
const Landing = lazy(()=> import('./landing/Landing'));
const RandomList = lazy(()=> import('./RandomList'));
const CocktailList = lazy(()=> import('./CocktailList'));
const CocktailDetail = lazy(()=> import('./CocktailDetail'));


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
      {/* <div clCocktail='container'> */}
      <Suspense fallback={(<div>Page Loading...</div>)}> 
        <Switch>
            <QueryClientProvider client={queryClient}>
              <Route exact path='/' component={Landing} />
              <Route exact path='/randomList' component={RandomList} />
              <Route exact path='/Cocktails' component={CocktailList} />
              <Route  path='/names-detail/:nameid' component={CocktailDetail} />
              {/* <Route component={()=> <h1>Looking for something else? Sorry the page was not found</h1>} /> */}
              {/* <Route exact path='/Ingredients' coponents={IngredientList} />
              <Route exact path='/Ingredients-list' coponents={IngredientDetail} />
              <Route exact path='/alphalist' coponents={AlphaList} /> */}
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
