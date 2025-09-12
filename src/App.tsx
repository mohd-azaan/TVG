import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomepageDesktop } from "./screens/HomepageDesktop/HomepageDesktop";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<HomepageDesktop />} />
      </Routes>
    </Router>
  );
};
