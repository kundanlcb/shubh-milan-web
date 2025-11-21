import type { ReactNode, ButtonHTMLAttributes } from 'react';
import { Colors, Typography, Spacing, BorderRadius } from '@/constants/styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
  icon?: ReactNode;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  icon,
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: `${Spacing.sm}px`,
    borderRadius: `${BorderRadius.md}px`,
    fontWeight: Typography.fontWeight.semibold,
    fontFamily: Typography.fontFamily.medium,
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled || loading ? 0.6 : 1,
    transition: 'all 0.2s ease',
    border: 'none',
    outline: 'none',
    width: fullWidth ? '100%' : 'auto',
  };

  const sizeStyles = {
    sm: {
      padding: `${Spacing.sm}px ${Spacing.md}px`,
      fontSize: `${Typography.fontSize.sm}px`,
      minHeight: '36px',
    },
    md: {
      padding: `${Spacing.md}px ${Spacing.lg}px`,
      fontSize: `${Typography.fontSize.base}px`,
      minHeight: '48px',
    },
    lg: {
      padding: `${Spacing.lg}px ${Spacing.xl}px`,
      fontSize: `${Typography.fontSize.lg}px`,
      minHeight: '56px',
    },
  };

  const variantStyles = {
    primary: {
      backgroundColor: Colors.buttonPrimary,
      color: Colors.buttonText,
    },
    secondary: {
      backgroundColor: Colors.buttonSecondary,
      color: Colors.buttonText,
    },
    outline: {
      backgroundColor: 'transparent',
      color: Colors.primary,
      border: `2px solid ${Colors.primary}`,
    },
    text: {
      backgroundColor: 'transparent',
      color: Colors.primary,
    },
  };

  const combinedStyles = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
  };

  return (
    <button
      style={combinedStyles}
      disabled={disabled || loading}
      className={`hover:opacity-90 active:scale-95 ${className}`}
      {...props}
    >
      {loading && (
        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
      {!loading && icon}
      {children}
    </button>
  );
};
