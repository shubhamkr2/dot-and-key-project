import React from "react";
import { Route, Routes } from "react-router-dom";
import { LogIn } from "../Pages/LogIn";
import { SignUp } from "../Pages/SignUp";
import { Home } from "../Pages/Home";
import { Sunscreens } from "../Pages/Sunscreens";
import { Moisturizers } from "../Pages/Moisturizers";
import { Serums } from "../Pages/Serums";
import { LipBalms } from "../Pages/LipBalms";
import { FaceWash } from "../Pages/FaceWash";
import { FaceMasks } from "../Pages/FaceMasks";
import { All } from "../Pages/All";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/sunscreens" element={<Sunscreens />} />
      <Route path="/moisturizers" element={<Moisturizers />} />
      <Route path="/serums" element={<Serums />} />
      <Route path="/lipbalm" element={<LipBalms />} />
      <Route path="/facewash" element={<FaceWash />} />
      <Route path="/facemasks" element={<FaceMasks />} />
      <Route path="/all" element={<All />} />
    </Routes>
  );
}

export { AllRoutes };
