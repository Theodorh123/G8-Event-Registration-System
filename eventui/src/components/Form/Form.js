import React from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Login from './Login/Login';
import Register from './Register/Register';
// import classes from './Form.module.css';

const FormPanel = (props) => {

  return (
    <Auxiliary>
        {props.isLogin ? <Login islogin={props.isLogin} /> : <Register isregister={props.isLogin} /> }
    </Auxiliary>
  );
};

export default FormPanel;
