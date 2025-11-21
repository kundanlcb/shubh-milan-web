import { useState } from 'react';
import type { InputHTMLAttributes } from 'react';
import { Colors, Typography, Spacing, BorderRadius } from '@/constants/styles';
import { Icon } from './Icon';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: { name: string; library?: 'feather' | 'material' | 'material-community' | 'ionicons' };
  rightIcon?: { name: string; library?: 'feather' | 'material' | 'material-community' | 'ionicons' };
  onRightIconClick?: () => void;
  fullWidth?: boolean;
}

export const Input = ({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  onRightIconClick,
  fullWidth = false,
  className = '',
  type = 'text',
  disabled = false,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const containerStyle = {
    width: fullWidth ? '100%' : 'auto',
    marginBottom: `${Spacing.md}px`,
  };

  const labelStyle = {
    display: 'block',
    fontSize: `${Typography.fontSize.sm}px`,
    color: Colors.textSecondary,
    fontWeight: Typography.fontWeight.medium,
    marginBottom: `${Spacing.xs}px`,
  };

  const inputContainerStyle = {
    position: 'relative' as const,
    display: 'flex',
    alignItems: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: `${Spacing.sm}px ${rightIcon ? Spacing['2xl'] : Spacing.md}px ${Spacing.sm}px ${leftIcon ? Spacing['2xl'] : Spacing.md}px`,
    fontSize: `${Typography.fontSize.base}px`,
    color: Colors.inputText,
    backgroundColor: Colors.inputBackground,
    border: `1px solid ${error ? Colors.error : isFocused ? Colors.primary : Colors.inputBorder}`,
    borderWidth: isFocused ? '2px' : '1px',
    borderRadius: `${BorderRadius.md}px`,
    outline: 'none',
    fontFamily: Typography.fontFamily.regular,
    minHeight: '48px',
    transition: 'all 0.2s ease',
    opacity: disabled ? 0.6 : 1,
  };

  const iconStyle = {
    position: 'absolute' as const,
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
  };

  const helperStyle = {
    fontSize: `${Typography.fontSize.xs}px`,
    color: error ? Colors.error : Colors.textTertiary,
    marginTop: `${Spacing.xs}px`,
  };

  const isPasswordType = type === 'password';
  const actualType = isPasswordType && showPassword ? 'text' : type;

  return (
    <div style={containerStyle}>
      {label && <label style={labelStyle}>{label}</label>}
      <div style={inputContainerStyle}>
        {leftIcon && (
          <div style={{ ...iconStyle, left: `${Spacing.md}px` }}>
            <Icon
              name={leftIcon.name}
              library={leftIcon.library}
              size={20}
              color={isFocused ? Colors.primary : Colors.textSecondary}
            />
          </div>
        )}
        <input
          type={actualType}
          style={inputStyle}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={className}
          {...props}
        />
        {(rightIcon || isPasswordType) && (
          <div
            style={{ ...iconStyle, right: `${Spacing.md}px`, cursor: 'pointer' }}
            onClick={
              isPasswordType
                ? () => setShowPassword(!showPassword)
                : onRightIconClick
            }
          >
            <Icon
              name={
                isPasswordType
                  ? showPassword
                    ? 'eye-off'
                    : 'eye'
                  : rightIcon?.name || ''
              }
              library={rightIcon?.library}
              size={20}
              color={isFocused ? Colors.primary : Colors.textSecondary}
            />
          </div>
        )}
      </div>
      {(error || helperText) && (
        <div style={helperStyle}>{error || helperText}</div>
      )}
    </div>
  );
};
