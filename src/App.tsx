import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MasterList, Menu, Planner, RecipeViewer } from './sections';

export const App = () => (
  <Router>
    <Route path="/">
      <Menu />
    </Route>
    <Route path="/master-list">
      <MasterList />
    </Route>
    <Route
      path="/planner/:planId?"
      render={({ match }) => <Planner planId={match.params.planId} />}
    ></Route>
    <Route
      path="/recipe/:recipeId"
      render={({ match }) => <RecipeViewer recipeId={match.params.recipeId} />}
    ></Route>
    {/* <Route path='/shopping-list/:planId?'>
      <ShoppingList planId={router.params.planId}/>
  </Route>
  <Route path='*', onEnter: () => '/'> </Route> */}
  </Router>
);

export default App;
