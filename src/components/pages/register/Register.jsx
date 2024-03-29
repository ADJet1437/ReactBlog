import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username"
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email"
        />
        <label>Password</label>
        <input className="registerInput" type="password" />
        <button className="registerRegisterBtn">Register</button>
      </form>
      <button className="registerLoginBtn">Login</button>
    </div>
  );
}
