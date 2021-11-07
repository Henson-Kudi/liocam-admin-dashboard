import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import Nav from './Nav';
import NewPlan from './NewPlan';
import NewProduct from './NewProduct';
import Plans from './Plans';
import useFetch from './useFetch';
import {products, projects} from './samplesToDelete/grid-data'
import UpdatePlan from './UpdatePlan';
import UpdateProduct from './UpdateProduct';
import { baseURL } from './axios';

function App() {
  const {data:projects, handleDelete:planDelete} = useFetch('plans')
  const {data:products, handleDelete:productDelete} = useFetch('products')

  // const planDelete = async()=>{
  //   const res = await baseURL.delete('plans', {ddata})
  //   const data = await res.data
  //   console.log(data);
  // }

  return (
    <div className="App">
    <Router>
      <Nav/>

      
        <Switch>
          <Route path="/" exact>
            <Plans data={projects} handleDelete={planDelete} route="designs"/>
          </Route>

          <Route path="/designs/:id/edit" exact>
            <UpdatePlan data={projects} route="designs"/>
          </Route>

          <Route path="/products" exact>
            <Plans data={products} handleDelete={productDelete} route="products"/>
          </Route>

          <Route path="/new-plan" exact>
            <NewPlan/>
          </Route>

          <Route path="/new-product" exact>
            <NewProduct/>
          </Route>

          <Route path="/products/:id/edit" exact>
            <UpdateProduct/>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
