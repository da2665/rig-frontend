import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import io from "socket.io-client";
function RigAuthRoot() {
    const socket = io(process.env.REACT_APP_WEBSOCKET_URL as string);
    const register = () => {
        socket.emit("Register", {
            firstName: "Dylan",
            lastName: "Armstrong",
            email_address: "test@test.com",
            username: "da2665",
            password: "T3st!45"
        });

        
    }

    const login = () => {
        socket.emit("Login", {
            email_address: "test@test.com",
            password: "T3st!45"
        })
    }

    

    return (
        <div>
            <div>
                <button onClick={() => register()}>Register</button>
                <button onClick={() => login()}>Login</button>
            </div>
        </div>
    )
}
export default RigAuthRoot; 