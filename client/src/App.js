import React from 'react';
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


import ProductForm from './views/ProductForm';
import UpdateForm from './views/UpdateForm';
import Show from './views/Show';
import Main from'./component/Main';
import Detail from './component/Detail';

function App() {
  return (
    <BrowserRouter>
      <header>
       
        <Link to={"/product/new"}>
         <h1> New </h1>
        </Link>
      </header>

      <Switch>
        <Route exact path="/product/new">
          <ProductForm />
          <Main />
        </Route>
        <Route exact path="/product/:id/edit">
          <UpdateForm />
        </Route>
        <Route exact path="/product/:id">
          <Show />
          <Detail />
        </Route>
        {/* <Route exact path="/">
          <ProductForm />
        </Route> */}
        
      </Switch>
    </BrowserRouter>
  );
}
export default App;
