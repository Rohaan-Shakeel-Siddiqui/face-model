import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Dashboard, Register, SignIn } from "./pages";
import { Loading, PrivateRoute } from "./components";
import { verifyLocalStorage } from "./api";
import { login } from "./actions";

const App = () => {
  const dispatch = useDispatch();

  const { user } = JSON.parse(localStorage.getItem("state") as string);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    if (user.auth === true) {
      try {
        verifyLocalStorage().then(({ status }) => {
          if (status === 200) {
            dispatch(login(user.data));
            setVerified(true);
          }
        });
      } catch {}
    }
  });

  return (
    <Switch>
      <PrivateRoute auth={user.auth} path="/dashboard" redirect="/register">
        {verified ? (
          <div className="base-card">
            <Dashboard />
          </div>
        ) : (
          <Loading type="circular" />
        )}
      </PrivateRoute>
      <Route exact path="/register">
        <div className="base-card">
          <Register />
        </div>
      </Route>
      <Route path="/">
        <div className="base-card">
          <SignIn />
        </div>
      </Route>
    </Switch>
  );
};

export default App;
