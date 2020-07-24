import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import CustomersContainer from "./components/Customers/CustomersContainer";
import ShopsList from "./components/Shops/ShopsList";
import AddCustomers from "./components/Customers/AddCustomers";
import CustomersUpdate from "./components/Customers/CustomersUpdate";
import ShopsUpdate from "./components/Shops/ShopsUpdate";
import ShopsAdd from "./components/Shops/ShopsAdd";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/customers" component={CustomersContainer} />
        <Route path="/add-customers" component={AddCustomers} />
        <Route path="/update-customers/:id" component={CustomersUpdate} />
        <Route path="/shops" component={ShopsList} />
        <Route path="/add-shops" component={ShopsAdd} />
        <Route path="/update-shops/:id" component={ShopsUpdate} />
      </Switch>
    </>
  );
}

export default App;
