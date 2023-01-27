import "./assets/styles/app.css";
import Home from "./pages/home";
import { Route, Routes } from "react-router";
import ProductSearch from "./pages/productSearch";
import About from "./pages/about";
import Contact from "./pages/contact";
import Login from "./pages/admin/login";
import Update from "./pages/admin/update";
import Upload from "./pages/admin/upload";
import NotFound from "./pages/notFound";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-search" element={<ProductSearch />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<Contact />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/update" element={<Update />} />
        <Route path="/admin/upload" element={<Upload />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
