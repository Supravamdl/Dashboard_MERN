import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <Router>
      <div className='App'>
        <div>
          <div>
            <Routes>
              <Route exact path='/' element={<Login />} />
              <Route path='/sign-in' element={<Login />} />
              <Route path='/sign-up' element={<SignUp />} />
              <Route path='/home' element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;
