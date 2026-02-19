import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/AboutPage" Component={AboutPage} />
        <Route path="/ProductsPage" Component={ProductsPage} />
      </Routes>
    </BrowserRouter>
  );
}
