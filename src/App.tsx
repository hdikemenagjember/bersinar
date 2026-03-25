import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "./pages/Home";
import ServiceList from "./pages/ServiceList";
import ServiceDetail from "./pages/ServiceDetail";
import FormPage from "./pages/FormPage";
import SubmissionSuccess from "./pages/SubmissionSuccess";
import TrackingPage from "./pages/TrackingPage";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/layanan" element={<ServiceList />} />
          <Route path="/layanan/:id" element={<ServiceDetail />} />
          <Route path="/formulir/:id" element={<FormPage />} />
          <Route path="/sukses" element={<SubmissionSuccess />} />
          <Route path="/lacak" element={<TrackingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
