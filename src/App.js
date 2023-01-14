import {  Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./pages/Navbar";
function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route index element={<Dashboard />} /> 
      </Routes>
    </>
  );
}

export default App;
