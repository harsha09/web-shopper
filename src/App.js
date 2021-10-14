import "./App.css";
import HomePage from "./pages/homePage/homePage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shopPage/shopPage";
import Header from "./components/header/header";
import SignInPage from "./pages/signInPage/signInPage";
import { auth } from "./firebase/firebase.utils";
import { useEffect, useState } from "react";

function App() {
  const [curUser, setCurUser] = useState(null);
  const [isSignInClicked, setSignInClicked] = useState({ show: false });

  const doSignOut = () => {
    return auth.signOut();
  };
  useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurUser(user);
      console.log(user);
    });
    return unSubscribeFromAuth;
  }, []);

  const onSignInClickHandler = () => {
    setSignInClicked({ show: true });
  };

  const onSignInCloseHandler = () => {
    setSignInClicked({ show: false });
  };

  return (
    <>
      <SignInPage {...isSignInClicked} onSignInClose={onSignInCloseHandler} />
      <div
        className={`${"webshopper-content"} ${
          isSignInClicked.show ? "inactive" : "active"
        }`}
      >
        <Header
          curUser={curUser}
          onSignInClick={onSignInClickHandler}
          onSignOut={doSignOut}
        />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </div>
    </>
  );
}

export default App;
