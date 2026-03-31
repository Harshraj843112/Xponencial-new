/* src/App.js */
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Keep Navbar and NewFooter eagerly loaded
import Navbar from './components/Navbar/Navbar';
import NewFooter from './components/NewFooter';

// Global CSS stays as-is
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PrivacyPolicy from './components/PrivacyPolicy';
import Spinner from './components/Loader/Spiner';

// Lazy-load every page/component exactly as originally imported
const Home = lazy(() => import('./Pages/Home'));
const ForHospital = lazy(() => import('./Pages/ForHospital/ForHospitalHome'));
const AboutUsHome = lazy(() => import('./components/AboutUs/AboutUsHome'));
const ServicesHome = lazy(() => import('./components/Services/ServicesHome'));
const ContactInfoCard = lazy(() => import('./components/Contact/ContactInfoCard'));
const ContactHome = lazy(() => import('./components/Contact/ContactHome'));
const DoctorHome = lazy(() => import('./Doctor/DoctorHome'));

const OPDHome = lazy(() => import('./components/OPD/OPDHome'));

const Patient = lazy(() => import('./components/Patient'));
const TermsConditions = lazy(() => import('./components/TermsConditions'));
const SarvodyaHospital = lazy(() => import('./components/SarvodyaHospital'))

export default function App() {
  return (
    <Router>
      <Navbar />
      
     <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clinics" element={<OPDHome />} />
          <Route path="/about" element={<AboutUsHome />} />
          <Route path="/services" element={<ServicesHome />} />
          <Route path="/contacts" element={<ContactHome />} />
         
          <Route path="/doctors" element={<DoctorHome />} />
    
          <Route path="/hospital/opd" element={<OPDHome />} />
          <Route path="/patients" element={<Patient />} />
          <Route path="/sarvodyahospital" element={<SarvodyaHospital />} />
          <Route
            path="/terms-conditions"
            element={<TermsConditions />}
          />
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          />
          {/* The ContactInfoCard import remains available if you use it inside these pages */}
        </Routes>
      </Suspense>
      {/* <Footer /> */}
      <NewFooter />
    </Router>
  );
}
