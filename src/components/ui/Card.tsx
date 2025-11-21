import type { ReactNode, HTMLAttributes } from 'react';
import { Colors, Spacing, BorderRadius, Shadows } from '@/constants/styles';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: keyof typeof Spacing;
  noPadding?: boolean;
  className?: string;
}

export const Card = ({
  children,
  variant = 'default',
  padding = 'md',
  noPadding = false,
  className = '',
  style,
  ...props
}: CardProps) => {
  const baseStyles = {
    backgroundColor: Colors.backgroundCard,
    borderRadius: `${BorderRadius.lg}px`,
    padding: noPadding ? 0 : `${Spacing[padding]}px`,
    overflow: 'hidden' as const,
  };

  const variantStyles = {
    default: {
      ...Shadows.md,
    },
    outlined: {
      border: `1px solid ${Colors.border}`,
    },
    elevated: {
      ...Shadows.lg,
    },
  };

  const combinedStyles = {
    ...baseStyles,
    ...variantStyles[variant],
    ...style,
  };

  return (
    <div style={combinedStyles} className={className} {...props}>
      {children}
    </div>
  );
};
