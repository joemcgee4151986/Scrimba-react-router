import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import VanDetails from "./pages/VanDetails";
import Layout from "./pages/Layout";
import HostLayout from "./pages/HostLayout";
import Dashboard from "./Host/Dashboard"
import Income from "./Host/Income"
import Review from "./Host/Review"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Vans/:id" element={<VanDetails />} />
          
          <Route path = "/host" element = {<HostLayout />} >
          <Route path="/host/Dashboard" element={<Dashboard />} />
          <Route path="/host/Income" element={<Income/>} />
          <Route path="/host/Review" element={<Review />} />
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
