import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Import your CSS file
import Homepage from './component/Homepage'; // Check the component path
import RequestPage from './component/RequestPage'; // Check the component path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Update the route path */}
        <Route path="/request" element={<RequestPage />} /> {/* Update the route path */}
      </Routes>
    </Router>
  );
}

export default App;
