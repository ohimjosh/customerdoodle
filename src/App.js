import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Chat } from "./pages/Chat";
import { Email } from "./pages/Email";
import { AdminView } from "./pages/AdminView";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/email" element={<Email />} />
          <Route path="/adminview" element={<AdminView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
