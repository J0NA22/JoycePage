// src/App.js
import React from "react";
import Header from "./components/header";
import ScrollToTop from "./components/scrollToTop";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";


function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />

      <main style={{ padding: '20px', minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Puedes agregar más rutas aquí */}
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
