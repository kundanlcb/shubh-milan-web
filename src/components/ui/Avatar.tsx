import type { ImgHTMLAttributes } from 'react';
import { Colors, BorderRadius } from '@/constants/styles';

interface AvatarProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src?: string;
  alt?: string;
  size?: number;
  name?: string; // For fallback initials
  className?: string;
}

export const Avatar = ({
  src,
  alt = 'Avatar',
  size = 40,
  name,
  className = '',
  style,
  ...props
}: AvatarProps) => {
  const getInitials = (name?: string): string => {
    if (!name) return '?';
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  const containerStyle = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: `${BorderRadius.full}px`,
    overflow: 'hidden' as const,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    color: Colors.white,
    fontWeight: 600,
    fontSize: `${size * 0.4}px`,
    flexShrink: 0,
    ...style,
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
  };

  if (!src) {
    return (
      <div style={containerStyle} className={className}>
        {getInitials(name)}
      </div>
    );
  }

  return (
    <div style={containerStyle} className={className}>
      <img src={src} alt={alt} style={imgStyle} {...props} />
    </div>
  );
};
