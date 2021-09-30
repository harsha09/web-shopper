import "./App.css";
import HomePage from "./pages/homePage/homePage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shopPage/shopPage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
    </Switch>
  );
}

export default App;
