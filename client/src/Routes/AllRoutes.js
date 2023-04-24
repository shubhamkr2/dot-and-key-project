import { Route, Routes } from "react-router-dom";

import React from "react";
import { LogIn } from "../Pages/LogIn";
import { SignUp } from "../Pages/SignUp";
import { Home } from "../Pages/Home";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export { AllRoutes };
