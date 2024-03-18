import { lazy } from "react";

import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import { NotFound } from "./components/NotFound.jsx";

const Home = lazy(() => import("./pages/HomePage.jsx"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
