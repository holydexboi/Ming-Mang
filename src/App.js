import {  Routes, Route } from "react-router-dom";
import Cable from "./pages/Cable";
import Dashboard from "./pages/Dashboard";
import Electricty from "./pages/Electricity";
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
        <Route path="/cable" element={<Cable/>}/>
        <Route path="/electricity" element={<Electricty/>}/>
      </Routes>
    </>
  );
}

export default App;
