import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Chat } from "./pages/Chat";  
import { Email } from "./pages/Email";
import { AdminView } from "./pages/AdminView";
import { AuthContextProvider } from "./context/AuthContext";
import { Navbar } from "./components/Navbar";
import { Account } from "./pages/Account";
import { Protected } from "./components/Protected";
import { Signup } from "./components/Signup";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
          
            <Route
              path="/chat"
              element={
                <Protected>
                  <Chat />
                </Protected>
              }
            />
            <Route
              path="/email"
              element={
                <Protected>
                  <Email />
                </Protected>
              }
            />
            <Route
              path="/adminview"
              element={
                <Protected>
                  <AdminView />
                </Protected>
              }
            />
            <Route
              path="/account"
              element={
                <Protected>
                  <Account />
                </Protected>
              }
            />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
