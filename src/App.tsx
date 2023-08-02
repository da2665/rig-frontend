import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/dashboard/RigDashboardRoot';
import "bootstrap/dist/css/bootstrap.min.css";
import Chat from './components/chat/RigChatRoot';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
