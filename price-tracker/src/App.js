import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/PriceTrackerThemeButton.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./contexts/ThemeProvider";
import { ProductInfoProvider } from "./contexts/ProductInfoProvider";

import React, { useState } from "react";
import { useTheme } from "./contexts/ThemeProvider";
import PriceTracker from "./components/PriceTracker";
import PriceTrackerContactUs from "./pages/PriceTrackerContactUs";
import PriceTrackerCommunity from "./pages/PriceTrackerCommunity";
import PriceTrackerNavBar from "./components/PriceTrackerNavBar";
import PriceTrackerTheme from "./components/PriceTrackerTheme";

function App() {
  const { theme } = useTheme();

  return (
    <BrowserRouter>
      <div
        className="App"
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
        }}
      >
        <ThemeProvider>
          <ProductInfoProvider>
            {/* <PriceTracker></PriceTracker> */}
            <PriceTrackerTheme></PriceTrackerTheme>
            <PriceTrackerNavBar></PriceTrackerNavBar>
            <Routes>
              <Route path="/home" element={<PriceTracker />}></Route>
              <Route
                path="/community"
                element={<PriceTrackerCommunity />}
              ></Route>
              <Route
                path="/contactus"
                element={<PriceTrackerContactUs />}
              ></Route>
            </Routes>
          </ProductInfoProvider>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
