import "./App.css";
import HomePage from "./pages/homePage/homePage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shopPage/shopPage";
import Header from "./components/header/header";
import SignInPage from "./pages/signInPage/signInPage";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/sign-in" component={SignInPage} />
      </Switch>
    </>
  );
}

export default App;
