import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { DownloadPage } from './pages/DownloadPage';
import { SuccessStoriesPage } from './pages/SuccessStoriesPage';
import { FAQPage } from './pages/FAQPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter basename="/dilkor-web">
      <Routes>
        {/* Public landing pages with MainLayout */}
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
        <Route path="/features" element={<MainLayout><FeaturesPage /></MainLayout>} />
        <Route path="/how-it-works" element={<MainLayout><HowItWorksPage /></MainLayout>} />
        <Route path="/download" element={<MainLayout><DownloadPage /></MainLayout>} />
        <Route path="/success-stories" element={<MainLayout><SuccessStoriesPage /></MainLayout>} />
        <Route path="/faq" element={<MainLayout><FAQPage /></MainLayout>} />
        <Route path="/privacy" element={<MainLayout><PrivacyPage /></MainLayout>} />
        <Route path="/terms" element={<MainLayout><TermsPage /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><ContactPage /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
