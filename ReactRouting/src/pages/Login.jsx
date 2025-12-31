
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF, FaApple } from "react-icons/fa";

import "./Login.css";
const Login = () => {
  return (
    <div className="container">
      <div className="login">
        <div className="green">
          <div id="heading">Sign in with Email</div>
          <div>
            <p>Make a new docs to bring your data</p>
          </div>
          <div id="input-con">
            <div className="f">
              <input type="email" placeholder="Email"/>
            </div>
            <div id="s" className="f">
              <input type="password" placeholder="Password"/>
            </div>
          </div>
          <div className="forget-pass">Forget Password?</div>
          <div className="get-started">Get Started</div>
          <div className="sign-in">Sign in with</div>
          <div className="flex-con">
            <div>
            <AiOutlineGoogle />
            </div>
            <div>
              <FaFacebookF />
            </div>
            <div>
              <FaApple />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
