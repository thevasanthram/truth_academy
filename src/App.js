import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./views/Header/Header";
import Footer from "./views/Footer/Footer";
import Home from "./views/Home/Home";
import MenuBarHandler from "./views/Menubar_Handler/MenuBarHandler";
import NotFound from "./views/Not_Found/NotFound";
import ErrorBoundary from "./views/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Header />
        <div className="App">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/:menu_item" element={<MenuBarHandler />} />
              <Route
                path="*"
                element={
                  <div className="menu-bar-handler">
                    <NotFound />
                  </div>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
