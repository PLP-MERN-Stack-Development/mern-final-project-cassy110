import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import WellnessCompanion from './pages/wellness-companion';
import VirtualConsultationSuite from './pages/virtual-consultation-suite';
import EmergencyResponseCenter from './pages/emergency-response-center';
import CareCoordinationHub from './pages/care-coordination-hub';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<WellnessCompanion />} />
        <Route path="/wellness-companion" element={<WellnessCompanion />} />
        <Route path="/virtual-consultation-suite" element={<VirtualConsultationSuite />} />
        <Route path="/emergency-response-center" element={<EmergencyResponseCenter />} />
        <Route path="/care-coordination-hub" element={<CareCoordinationHub />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
