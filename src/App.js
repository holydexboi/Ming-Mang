import {  Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./pages/Navbar";
import Purchase from "./pages/Purchase";
function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route index element={<Dashboard />} /> 
        <Route path="/purchase" element={<Purchase/>}/>
      </Routes>
    </>
  );
}

export default App;
