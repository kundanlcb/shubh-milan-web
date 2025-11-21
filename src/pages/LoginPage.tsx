import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Colors, Typography, Spacing } from '@/constants/styles';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate login API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // On success, navigate to home
      navigate('/app/home');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
    padding: `${Spacing.md}px`,
  };

  const contentStyle = {
    width: '100%',
    maxWidth: '400px',
  };

  const logoContainerStyle = {
    textAlign: 'center' as const,
    marginBottom: `${Spacing.xl}px`,
  };

  const logoStyle = {
    width: '120px',
    height: '120px',
    margin: '0 auto',
  };

  const headerStyle = {
    marginBottom: `${Spacing.xl}px`,
  };

  const welcomeTextStyle = {
    fontSize: `${Typography.fontSize['3xl']}px`,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.textPrimary,
    marginBottom: `${Spacing.xs}px`,
  };

  const subtitleStyle = {
    fontSize: `${Typography.fontSize.base}px`,
    color: Colors.textSecondary,
    fontFamily: Typography.fontFamily.hindi,
  };

  const formStyle = {
    marginBottom: `${Spacing.lg}px`,
  };

  const forgotPasswordStyle = {
    textAlign: 'center' as const,
    marginTop: `${Spacing.md}px`,
  };

  const forgotPasswordLinkStyle = {
    color: Colors.primary,
    fontSize: `${Typography.fontSize.sm}px`,
    textDecoration: 'none',
    cursor: 'pointer',
  };

  const registerContainerStyle = {
    textAlign: 'center' as const,
    marginTop: `${Spacing.xl}px`,
  };

  const registerTextStyle = {
    fontSize: `${Typography.fontSize.base}px`,
    color: Colors.textSecondary,
  };

  const registerLinkStyle = {
    color: Colors.primary,
    fontWeight: Typography.fontWeight.semibold,
    textDecoration: 'none',
    cursor: 'pointer',
  };

  const creditStyle = {
    textAlign: 'center' as const,
    marginTop: `${Spacing.xl}px`,
    fontSize: `${Typography.fontSize.xs}px`,
    color: Colors.textTertiary,
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        {/* Logo */}
        <div style={logoContainerStyle}>
          <div style={logoStyle}>
            <img 
              src="/shubh-milan-logo.png" 
              alt="Shubh Milan"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              onError={(e) => {
                // Fallback to text if image not found
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        </div>

        {/* Header */}
        <div style={headerStyle}>
          <h1 style={welcomeTextStyle}>Welcome back! 🙏</h1>
          <p style={subtitleStyle}>आपका स्वागत है - Find your perfect जीवनसाथी</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} style={formStyle}>
          <Input
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            fullWidth
            required
            leftIcon={{ name: 'mail', library: 'feather' }}
          />

          <Input
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            fullWidth
            required
          />

          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            loading={isLoading}
          >
            Sign In
          </Button>

          <div style={forgotPasswordStyle}>
            <a
              href="#"
              style={forgotPasswordLinkStyle}
              onClick={(e) => {
                e.preventDefault();
                // Handle forgot password
              }}
            >
              Forgot your password?
            </a>
          </div>
        </form>

        {/* Register Link */}
        <div style={registerContainerStyle}>
          <span style={registerTextStyle}>New to Shubh Milan? </span>
          <a
            href="#"
            style={registerLinkStyle}
            onClick={(e) => {
              e.preventDefault();
              navigate('/register');
            }}
          >
            Create account
          </a>
        </div>

        {/* Credit */}
        <div style={creditStyle}>
          Made with ❤️ for the Mithila community
        </div>
      </div>
    </div>
  );
};
