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
import { Payment } from "../Pages/Payment";
import { Shipment } from "../Pages/Shipment";
import { ErrorPage } from "../Pages/ErrorPage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/login" element={<LogIn />} exact />
      <Route path="/signup" element={<SignUp />} exact />
      <Route path="/cart" element={<Cart />} exact />
      <Route path="/sunscreens" element={<Sunscreens />} exact />
      <Route path="/sunscreens/:id" element={<SingleProductPage />} />
      <Route path="/moisturizers" element={<Moisturizers />} exact />
      <Route path="/moisturizers/:id" element={<SingleProductPage />} />
      <Route path="/serums" element={<Serums />} exact />
      <Route path="/serums/:id" element={<SingleProductPage />} />
      <Route path="/lipcare" element={<LipCare />} exact />
      <Route path="/lipcare/:id" element={<SingleProductPage />} />
      <Route path="/facewash" element={<FaceWash />} exact />
      <Route path="/facewash/:id" element={<SingleProductPage />} />
      <Route path="/facemasks" element={<FaceMasks />} exact />
      <Route path="/facemasks/:id" element={<SingleProductPage />} />
      <Route path="/all" element={<All />} exact />
      <Route path="/all/:id" element={<SingleProductPage />} />
      <Route path="/searchresult" element={<SearchResult />} exact />
      <Route path="/searchresult/:id" element={<SingleProductPage />} />
      <Route path="/shipment" element={<Shipment />} exact />
      <Route path="/payment" element={<Payment />} exact />
      {/* <Route path="/error" element={<ErrorPage />} exact /> */}
      <Route path="/product" element={<SingleProductPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export { AllRoutes };
