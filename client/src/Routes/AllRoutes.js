import React from "react";
import { Route, Routes } from "react-router-dom";
import { LogIn } from "../Pages/LogIn";
import { SignUp } from "../Pages/SignUp";
import { Home } from "../Pages/Home";
import { Sunscreens } from "../Pages/Sunscreens";
import { Moisturizers } from "../Pages/Moisturizers";
import { Serums } from "../Pages/Serums";
import { LipCare } from "../Pages/LipCare";
import { FaceWash } from "../Pages/FaceWash";
import { FaceMasks } from "../Pages/FaceMasks";
import { All } from "../Pages/All";
import SingleProductPage from "../Pages/SingleProductPage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<SingleProductPage />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/sunscreens" element={<Sunscreens />} />
      <Route path="/moisturizers" element={<Moisturizers />} />
      <Route path="/serums" element={<Serums />} />
      <Route path="/lipcare" element={<LipCare />} />
      <Route path="/facewash" element={<FaceWash />} />
      <Route path="/facemasks" element={<FaceMasks />} />
      <Route path="/all" element={<All />} />
    </Routes>
  );
}

export { AllRoutes };
