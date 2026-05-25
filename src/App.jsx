import { BrowserRouter, Routes, Route } from "react-router-dom";
import Generate from "./pages/Generate";
import Navbar from "./components/Navbar";
import Verify from "./pages/Verify";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
     <Navbar/>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login/>} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;