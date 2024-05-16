import React, { Component, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";


export const Form = () => {
    const {store, actions} = useContext(Context)

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const location = useLocation()
    const buttonText = location.pathname === "/login" ? "Login" : "Sign Up";

    function sendData(e){
        e.preventDefault()
        if (location.pathname === "/login"){
            actions.login(email,password)
        }
        else {
            actions.signUp(email,password)
        }
    }

    return (
<form className="d-flex align-items-center flex-column" onSubmit={sendData}>
  <div className="col-12 col-lg-4 mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="col-12 col-lg-4 mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div>
    <button type="submit" className="btn btn-primary">Submit</button>
    <Link to="/" className="ms-5 mt-3">
        <button className="btn btn-secondary ms-2">Back Home!</button>
    </Link>
  </div>
</form>
);
}
