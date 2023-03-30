import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "widgets/layout/header";
import { MainPage } from "./main";

export const Routing = () => {
    return (
      <Header>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Header>
    );
};