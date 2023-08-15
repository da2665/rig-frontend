import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RigDashboardRoot from './components/dashboard/RigDashboardRoot';
import "bootstrap/dist/css/bootstrap.min.css";
import RigChatRoot from './components/chat/RigChatRoot';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RigDashboardRoot />} />
          <Route path="/chat" element={<RigChatRoot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
