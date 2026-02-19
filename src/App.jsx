import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProducPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/AboutPage" Component={AboutPage} />
        <Route path="/ProducPage" Component={ProductPage} />
      </Routes>
    </BrowserRouter>
  );
}
