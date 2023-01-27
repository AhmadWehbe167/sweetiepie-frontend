import "./assets/styles/app.css";
import Home from "./pages/home";
import { Route, Routes } from "react-router";
import ProductSearch from "./pages/productSearch";
import About from "./pages/about";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Update from "./pages/admin/update";
import Upload from "./pages/admin/upload";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product-search" element={<ProductSearch />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products/:id" element={<Contact />} />
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/update" element={<Update />} />
      <Route path="/admin/upload" element={<Upload />} />
    </Routes>
  );
}

export default App;
