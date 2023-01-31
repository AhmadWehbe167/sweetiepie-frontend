import { lazy, Suspense } from "react";
import { Outlet, Route, Routes } from "react-router";
import SmoothScroll from "./components/utils/smoothScroll";
import FPSpinner from "./components/utils/fullPageSpinner";
import "./assets/styles/app.css";

const Home = lazy(() => import("./pages/home"));
const ProductSearch = lazy(() => import("./pages/productSearch"));
const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));
const Product = lazy(() => import("./pages/product"));
const Login = lazy(() => import("./pages/admin/login"));
const Update = lazy(() => import("./pages/admin/update"));
const Upload = lazy(() => import("./pages/admin/upload"));
const NotFound = lazy(() => import("./pages/notFound"));
const Header = lazy(() => import("./components/header/header"));
const Footer = lazy(() => import("./components/footer/footer"));
const AllProducts = lazy(() => import("./pages/allProducts"));

function App() {
  return (
    <>
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route path="/" element={<Home />} />
            <Route path="/product-search" element={<ProductSearch />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/all-prods/:type" element={<AllProducts />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/update" element={<Update />} />
            <Route path="/admin/upload" element={<Upload />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </SmoothScroll>
    </>
  );
}

function Wrapper() {
  return (
    <>
      <Header />
      <Suspense fallback={<FPSpinner />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
