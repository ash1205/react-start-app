import React from "react";
import Home from "./pages/Home";
import ShowList from "./pages/Shows/ShowList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import MainLayout from "./layouts/MainLayout";

import SignUp from "./pages/User/SignUp";
import LogIn from "./pages/User/LogIn";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="shows" element={<ShowList />}></Route>
          <Route path="login" element={<LogIn />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
