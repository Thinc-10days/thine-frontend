import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { LoginPage } from "../pages/Login/LoginPage";
import SidebarLayout from "../Components/SidebarLayout";
import { SidebarType } from "../constants/SideBarType";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";

export const AppRouter = () => {
  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />

        <Route
          path="picker/*"
          element={<SidebarLayout type={SidebarType.Picker} />}
        >
          <Route path="" element={<h1> hell world </h1>} />
          <Route path="orderRequest" element={<h1> orderRequest</h1>} />
          <Route path="status" element={<h1> status</h1>} />
          <Route path="summary" element={<h1> summary</h1>} />
        </Route>

        <Route
          path="eater/*"
          element={<SidebarLayout type={SidebarType.Eater} />}
        >
          <Route path="" element={<h1> welcome</h1>} />
          <Route path="search" element={<h1> search product</h1>} />
          <Route path="status" element={<h1> order status</h1>} />
          <Route path="summary" element={<h1> summary </h1>} />
        </Route>
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};
