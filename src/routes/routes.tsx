import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { LoginPage } from "../pages/Login/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";

export const AppRouter = () => {
  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};
