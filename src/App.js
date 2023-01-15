import {  Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./pages/Navbar";
import Purchase from "./pages/Purchase";
import Recharge from "./pages/Recharge";
function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route index element={<Dashboard />} /> 
        <Route path="/purchase" element={<Purchase/>}/>
        <Route path="/recharge" element={<Recharge/>}/>
      </Routes>
    </>
  );
}

export default App;
