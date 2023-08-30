import io from "socket.io-client";
import { useEffect, useState } from "react";
import "./RigAuth.css";
import logo from "../../assets/logo.png";

function RigAuthRoot() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  
  const socket = io(process.env.REACT_APP_WEBSOCKET_URL as string, {
    withCredentials: true,
    extraHeaders: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
  });

  // Testing with dummy credentials

  const register = async () => {
    socket.emit("Register", {
      firstName: "Dylan",
      lastName: "Armstrong",
      email_address: "test@test.com",
      username: "da2665",
      password: "T3st!45",
    });
  };

  const login = async () => {
    socket.emit("Login", {
      email_address: email,
      password: password,
    });
  };

  useEffect(() => {
    socket.on("Logged In", (token) => {
      if (token) {
        localStorage.setItem("Token", token);
        window.location.href = "/";
      } else {
        console.error(`No token detected. Unauthorized.`);
      }
    });
  }, []);

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };
  return (
    <div className="rig-auth-root">
      <img src={logo}></img>
      <div className="rig-auth-inputs">
        <p>Email address:</p>
        <input
          onChange={(e) => handleEmail(e)}
          type="text"
          value={email}
          className="form-control bg-dark text-white"
        ></input>
        <p>Password:</p>
        <input
          onChange={(e) => handlePassword(e)}
          type="password"
          value={password}
          className="form-control bg-dark text-white"
        ></input>
      </div>
      <div className="rig-auth-buttons">
        <button id="register" className="btn btn-dark" onClick={() => register()}>
          Register
        </button>
        <button id="login" className="btn btn-dark" onClick={() => login()}>
          Login
        </button>
      </div>
    </div>
  );
}
export default RigAuthRoot;
