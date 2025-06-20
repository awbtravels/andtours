import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";

// Pages
import HomePage from "./pages/HomePage.jsx";
import ConsultationPage from "./pages/ConsultationPage.jsx";
import ConsultationSuccess from "./pages/ConsultationSuccess.jsx";
import Flights from "./pages/Flights.jsx";
import Hotels from "./pages/Hotels.jsx";
import Insurance from "./pages/Insurance.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import Team from "./pages/Team.jsx";
import NewsPage from "./pages/NewsPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="consultation" element={<ConsultationPage />} />
          <Route path="consultation-success" element={<ConsultationSuccess />} />
          <Route path="flights" element={<Flights />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="insurance" element={<Insurance />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="team" element={<Team />} />
          <Route path="news" element={<NewsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
