import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Greetings from "./Greeting";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Greetings />} />
      </Routes>
    </Router>
  );
};

export default App;
