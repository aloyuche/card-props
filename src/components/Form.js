import React from "react";

const Form = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      alert("Successfully Login");
      setUsername("");
      setPassword("");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="name">
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <p></p>
      <p>
        <label>Password: </label>
        <input
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </p>

      <button className="submit_button">Submit</button>
    </form>
  );
};

export default Form;
