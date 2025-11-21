import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage } from './pages/LoginPage';
import { AppHomePage } from './pages/AppHomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public landing pages with MainLayout */}
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
        <Route path="/features" element={<MainLayout><FeaturesPage /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><ContactPage /></MainLayout>} />
        
        {/* Auth pages without MainLayout */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* App pages (after login) - will add app layout later */}
        <Route path="/app/home" element={<AppHomePage />} />
        
        {/* Redirect /app to /app/home */}
        <Route path="/app" element={<Navigate to="/app/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
