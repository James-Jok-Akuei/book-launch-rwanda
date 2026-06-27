import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import AuthorDetail from "./pages/AuthorDetail.jsx";
import GuestDetail from "./pages/GuestDetail.jsx";
import ProgramPage from "./pages/ProgramPage.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main id="top">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authors/:id" element={<AuthorDetail />} />
          <Route path="/guests/:id" element={<GuestDetail />} />
          <Route path="/program" element={<ProgramPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
