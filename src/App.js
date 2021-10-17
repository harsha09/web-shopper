import "./App.css";
import HomePage from "./pages/homePage/homePage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shopPage/shopPage";
import Header from "./components/header/header";
import SignInPage from "./pages/signInPage/signInPage";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useEffect, useState } from "react";

function App() {
  const [curUser, setCurUser] = useState(null);
  const [showSignIn, setShowSignIn] = useState({ show: false });

  const doSignOut = () => {
    setCurUser(null);
    return auth.signOut();
  };
  useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot((snapshot) => {
          setCurUser(
            {
              id: snapshot.id,
              ...snapshot.data(),
            },
            setShowSignIn({ show: false })
          );
        });
      }
    });

    return () => {
      unSubscribeFromAuth();
    };
  }, []);

  const onSignInClickHandler = () => {
    setShowSignIn({ show: true });
  };

  const onSignInCloseHandler = () => {
    setShowSignIn({ show: false });
  };

  return (
    <>
      <SignInPage {...showSignIn} onSignInClose={onSignInCloseHandler} />
      <div
        className={`${"webshopper-content"} ${
          showSignIn.show ? "inactive" : "active"
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
