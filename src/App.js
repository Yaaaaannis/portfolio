import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';
import { SuperSEO } from "react-super-seo";
import MainSite from './pages/MainSite';
import MorlaixSite from './pages/MorlaixSite';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-black via-[#0A1829] to-[#0A1829] text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainSite />} />
            <Route path="/creation-site-morlaix" element={<MorlaixSite />} />
          </Routes>
        </main>
      </div>
      <SuperSEO
  title="Yannis Febvre Studio Portfolio"
  description="Yannis Febvre Studio, développeur web front end, créateur de sites web sur mesure."
  lang="fr"
  openGraph={{
    ogImage: {
      ogImage: "https://www.yannisfebvre.com/og-image.png",
      ogImageAlt: "Yannis Febvre",
      ogImageWidth: 1200,
      ogImageHeight: 630,
      ogImageType: "image/png",
    },
  }}
  twitter={{
    twitterSummaryCard: {
      summaryCardImage: "https://www.yannisfebvre.com/og-image.png",
      summaryCardImageAlt: "Yannis Febvre",
      summaryCardSiteUsername: "RoadToDevWebb",
    },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
