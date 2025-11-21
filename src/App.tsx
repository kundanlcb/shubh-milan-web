import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public landing pages with MainLayout */}
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
        <Route path="/features" element={<MainLayout><FeaturesPage /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><ContactPage /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
