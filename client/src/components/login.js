import Axios from "axios";
import { useState } from "react";

export default function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(true);

  const getData = () => {
    Axios.get(
      `http://localhost:5000/learners/login?username=${username}&password=${password}`
    )
      .then((response) => {
        console.log(response);
        window.location = "/home";
        setAuthorized(true);
      })
      .catch((error) => {
        setAuthorized(false);
      });
  };

  return (
    <form className='auth-inner'>
      <h3>Sign In</h3>
      <div className='mb-3'>
        <label>UserName</label>
        <input
          type='username'
          className='form-control'
          placeholder='Enter username'
          onChange={(event) => setUserName(event.target.value)}
        />
      </div>
      <div className='mb-3'>
        <label>Password</label>
        <input
          type='password'
          className='form-control'
          placeholder='Enter password'
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className='mb-3'></div>
      <div className='d-grid'>
        <button type='button' className='btn btn-primary' onClick={getData}>
          Submit
        </button>
        <p className='registered'>
          Don't have an account? <a href='/sign-up'>Sign Up?</a>
        </p>
        {!authorized && <p className='login'>Login failed</p>}
      </div>
    </form>
  );
}
