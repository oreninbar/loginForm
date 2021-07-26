import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./componenets/login/Login.jsx";
import SignUp from "./componenets/signup/SignUp";
// import UpdateProfile from "./componenets/updateProfile/UpdateProfile";
import ResetPassword from "./componenets/resetpassword/ResetPassword"
import Profile from "./componenets/profile/Profile";

const App = () => {


  return (
    <Router>
      <div className="App">
      <Route path="/" exact render={()=><Login />}></Route>
      <Route path="/sign-up" render={()=><SignUp/>}></Route>
      {/* <Route path="/update-profile" render={()=><UpdateProfile/>}></Route> */}
      <Route path="/reset-password" render={()=><ResetPassword/>}></Route>
      <Route path="/profile" render={()=><Profile/>}></Route>
      </div>
    </Router>
  );
};

export default App;
