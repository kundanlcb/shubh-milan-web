import { Colors, Typography, Spacing } from '@/constants/styles';

export const AppHomePage = () => {
  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: Colors.background,
    padding: `${Spacing.md}px`,
  };

  const headerStyle = {
    textAlign: 'center' as const,
    marginBottom: `${Spacing.xl}px`,
  };

  const titleStyle = {
    fontSize: `${Typography.fontSize['3xl']}px`,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.textPrimary,
    marginBottom: `${Spacing.sm}px`,
  };

  const subtitleStyle = {
    fontSize: `${Typography.fontSize.base}px`,
    color: Colors.textSecondary,
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>Welcome to Shubh Milan! 🙏</h1>
        <p style={subtitleStyle}>Your matrimonial journey begins here</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: Colors.textSecondary }}>
          Home feed with stories, posts, and matches coming soon...
        </p>
      </div>
    </div>
  );
};
