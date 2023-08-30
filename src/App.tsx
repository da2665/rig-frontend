import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RigDashboardRoot from "./components/dashboard/RigDashboardRoot";
import "bootstrap/dist/css/bootstrap.min.css";
import RigChatRoot from "./components/chat/RigChatRoot";
import RigAuthRoot from "./components/auth/RigAuthRoot";

function App() {

  const isAuthenticated = (): boolean => {
    return localStorage.getItem("Token") ? true : false;
  };

  return (
    <div className="App">
      <BrowserRouter>
        {isAuthenticated() && (
          <Routes>
            <Route path="/" element={<RigDashboardRoot />} />
            <Route path="/messaging" element={<RigChatRoot />} />
          </Routes>
        )}

        {!isAuthenticated() && (
          <Routes>
            <Route path="/" element={<RigAuthRoot />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
