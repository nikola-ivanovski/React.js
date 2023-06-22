import { useState } from "react";
import "./App.scss";
import { RegistrationForm } from "./components/RegistrationForm/RegistrationForm";
import { UsersRegistered } from "./components/UsersRegistered/UsersRegistered";
function App() {
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const handleRemoveUsers = () => {
    setRegisteredUsers([]);
  };

  const handleRegisterUser = (user) => {
    setRegisteredUsers([...registeredUsers, user]);
  };
  return (
    <>
      <h1>Register</h1>
      <RegistrationForm registerUser={handleRegisterUser} />
      <UsersRegistered
        registeredUsers={registeredUsers}
        removeUsers={handleRemoveUsers}
      />
    </>
  );
}

export default App;
