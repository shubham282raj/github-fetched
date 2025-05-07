import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import AutomatedBlog from "./components/AutomatedBlog";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Welcome Page</div>} />
        <Route path="/*" element={<AutomatedBlog />} />
      </Routes>
    </Router>
  );
}
