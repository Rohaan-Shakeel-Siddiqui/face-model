import { Redirect } from "react-router-dom";
import { getStateOf } from "../../utils";

const SignIn = () => {
  if (getStateOf("auth")) {
    return <Redirect to="/dashboard" />;
  }

  return <div>SignIn</div>;
};

export default SignIn;
