import { useState } from "react";
import "./RegistrationForm.scss";
export const RegistrationForm = ({ registerUser }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFullName = (event) => {
    setFullName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      fullName,
      email,
      password,
    };

    registerUser(newUser);
    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="fullName" htmlFor="fullName">
        Full Name:
      </label>
      <input
        type="text"
        id="fullName"
        className="field"
        value={fullName}
        onChange={handleFullName}
        placeholder="Enter your full name here.."
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        className="field"
        value={email}
        onChange={handleEmail}
        placeholder="Enter your email here.."
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        className="field"
        value={password}
        onChange={handlePassword}
        placeholder="Enter your password here.."
      />
      <button className="register_btn" type="submit">
        Register
      </button>
    </form>
  );
};
