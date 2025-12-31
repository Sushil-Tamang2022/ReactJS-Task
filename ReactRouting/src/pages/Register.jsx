import React from "react";
import "./Register.css";
const Register = () => {
  return (
    <div className="con">
      <div className="main">
        <div className="one">
          <div className="o">General Information</div>
          <select name="" id="">
            <option value="">Title</option>
            <option value="">Op1</option>
            <option value="">Op2</option>
          </select>
          <div className="m">
            <div className="inputf">
              <div>
                <input type="text" placeholder="First Name" />
              </div>
            </div>
            <div className="inputf">
              <div>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
          </div>
          <select className="position" name="" id="">
            <option value="">Position</option>
            <option value="">Position1</option>
            <option value="">Position2</option>
            <option value="">Position3</option>
          </select>
        </div>
        <div className="two">Two</div>
      </div>
    </div>
  );
};

export default Register;
