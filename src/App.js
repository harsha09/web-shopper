import "./App.css";
import HomePage from "./pages/homePage/homePage";
import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

import ShopPage from "./pages/shopPage/shopPage";
import Header from "./components/header/header";
import SignInPage from "./pages/signInPage/signInPage";
import setCurrentUser from "./redux/user/user.actions";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

function App(props) {
  const [showSignIn, setShowSignIn] = useState({ show: false });

  const doSignOut = () => {
    props.setCurrentUser(null);
    return auth.signOut();
  };
  useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot((snapshot) => {
          props.setCurrentUser(
            {
              id: snapshot.id,
              ...snapshot.data(),
            },
            setShowSignIn({ show: false })
          );
        });
      }
      props.setCurrentUser(user);
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
        <Header onSignInClick={onSignInClickHandler} onSignOut={doSignOut} />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
