import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "widgets/layout/header";

const TestPage = lazy(() => import("./test"));

export const Routing = () => {
    return (
      <Header>
        <Routes>
          <Route path="/" element={<TestPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Header>
    );
};