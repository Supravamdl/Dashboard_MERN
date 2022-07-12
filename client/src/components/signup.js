import Axios from "axios";
import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    name: name,
    email: email,
    password: password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(`http://localhost:5000/learners/sign-up`, user).then(
      (response) => {
        setName("");
        setEmail("");
        setPassword("");
        window.location = "/";
      }
    );
  };
  return (
    <form className='auth-inner' onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <div className='mb-3'>
        <label>Name</label>
        <input
          type='name'
          className='form-control'
          placeholder='Enter Name'
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
      </div>

      <div className='mb-3'>
        <label>Email address</label>
        <input
          type='email'
          className='form-control'
          placeholder='Enter email'
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
      </div>
      <div className='mb-3'>
        <label>Password</label>
        <input
          type='password'
          className='form-control'
          placeholder='Enter password'
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
      </div>
      <div className='d-grid'>
        <button type='submit' className='btn btn-primary'>
          Sign Up
        </button>
      </div>
      <p className='registered'>
        Already registered <a href='/sign-in'>Sign In?</a>
      </p>
    </form>
  );
}
