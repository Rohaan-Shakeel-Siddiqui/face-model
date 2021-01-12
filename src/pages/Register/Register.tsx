import { Redirect } from "react-router-dom";
import { getStateOf } from "../../utils";

const Register = () => {
  if (getStateOf("auth")) {
    return <Redirect to="/dashboard" />;
  }
  return <div>Register</div>;
};

export default Register;
