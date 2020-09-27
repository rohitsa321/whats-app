import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import ForumRoundedIcon from "@material-ui/icons/ForumRounded";
import { auth } from "./firebase";
import { provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [{},dispatch ]= useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_box">
        <ForumRoundedIcon />
        <div className="login_text">
          <h1>Sign in to Let's talk!</h1>
        </div>

        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
