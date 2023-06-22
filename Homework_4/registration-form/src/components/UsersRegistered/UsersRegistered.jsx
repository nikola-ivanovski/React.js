export const UsersRegistered = ({ registeredUsers, removeUsers }) => {
  return (
    <div>
      <h2>Registered users:</h2>
      {registeredUsers.length > 0 ? (
        <ul>
          {registeredUsers.map((user, index) => (
            <li key={index}>
              <p>Name: {user.fullName}</p>
              <p>Email: {user.email}</p>
              <p>Password: {user.password}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no registered users yet.</p>
      )}
      <button onClick={removeUsers}>Remove Users</button>
    </div>
  );
};
