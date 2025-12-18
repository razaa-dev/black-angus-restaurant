"use client";

import { useLanguage } from "../context/LanguageContext";
import GalleryScripts from "../components/GalleryScripts";

// Home page sections
import HeroSection from "../components/home/HeroSection";
import FormulesSection from "../components/home/FormulesSection";
import MainGallerySection from "../components/home/MainGallerySection";
import CustomerReviewsSection from "../components/home/CustomerReviewsSection";
import RestaurantPhotosSection from "../components/home/RestaurantPhotosSection";
import AboutSection from "../components/home/AboutSection";
import DessertsSection from "../components/home/DessertsSection";
import SecondaryGallerySection from "../components/home/SecondaryGallerySection";
import AngusInfoSection from "../components/home/AngusInfoSection";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <div className="breakdance">
        <HeroSection t={t} />
        <FormulesSection t={t} />
        <MainGallerySection />
        <CustomerReviewsSection t={t} />
        <RestaurantPhotosSection />
        <AboutSection t={t} />
        <DessertsSection t={t} />
        <SecondaryGallerySection />
        <AngusInfoSection t={t} />
      </div>
      <GalleryScripts />
    </>
  );
}
