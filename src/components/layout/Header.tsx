import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { NAV_LINKS } from '@/constants';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
            Shubh Milan
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-600 rounded-md transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </Container>
    </header>
  );
};
