import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>hello</h1>} />
      </Routes>
    </Router>
  );
}
