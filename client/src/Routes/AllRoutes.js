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
import { SingleProductPage } from "../Pages/SingleProductPage";
import { SearchResult } from "../Pages/SearchResult";
import { Cart } from "../Pages/Cart";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<SingleProductPage />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/sunscreens" element={<Sunscreens />} />
      <Route path="/sunscreens/:id" element={<SingleProductPage />} />
      <Route path="/moisturizers" element={<Moisturizers />} />
      <Route path="/moisturizers/:id" element={<SingleProductPage />} />
      <Route path="/serums" element={<Serums />} />
      <Route path="/serums/:id" element={<SingleProductPage />} />
      <Route path="/lipcare" element={<LipCare />} />
      <Route path="/lipcare/:id" element={<SingleProductPage />} />
      <Route path="/facewash" element={<FaceWash />} />
      <Route path="/facewash/:id" element={<SingleProductPage />} />
      <Route path="/facemasks" element={<FaceMasks />} />
      <Route path="/facemasks/:id" element={<SingleProductPage />} />
      <Route path="/all" element={<All />} />
      <Route path="/all/:id" element={<SingleProductPage />} />
      <Route path="/searchresult" element={<SearchResult />} />
      <Route path="/searchresult/:id" element={<SingleProductPage />} />

    </Routes>
  );
}

export { AllRoutes };
