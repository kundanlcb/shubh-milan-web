import { useState } from 'react';
import { Avatar } from '@/components/ui/Avatar';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { Colors, Typography, Spacing, BorderRadius } from '@/constants/styles';
import type { PostData } from '@/types/data';

interface PostCardProps {
  post: PostData;
  onLike?: (postId: string) => void;
  onProfile?: (userId: string) => void;
  onComment?: (postId: string) => void;
  onShare?: (postId: string) => void;
}

export const PostCard = ({
  post,
  onLike,
  onProfile,
  onComment,
  onShare,
}: PostCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likesCount, setLikesCount] = useState(post.likes);

  const [compatibilityScore] = useState(() => Math.floor(Math.random() * 20) + 80);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
    onLike?.(post.id);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : post.media.length - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev < post.media.length - 1 ? prev + 1 : 0));
  };

  return (
    <Card variant="elevated" noPadding>
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: `${Spacing.md}px` }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: `${Spacing.sm}px`, cursor: 'pointer' }} onClick={() => onProfile?.(post.id)}>
          <Avatar src={post.user.avatar} alt={post.user.name} size={48} name={post.user.name} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: `${Typography.fontSize.base}px`, fontWeight: Typography.fontWeight.semibold, color: Colors.textPrimary }}>{post.user.name}</span>
            <span style={{ fontSize: `${Typography.fontSize.sm}px`, color: Colors.textSecondary }}>
              {post.user.age} • {post.user.profession} • {post.user.location}
            </span>
          </div>
        </div>
        <div style={{ backgroundColor: Colors.accent, color: Colors.white, padding: `${Spacing.xs}px ${Spacing.sm}px`, borderRadius: `${BorderRadius.full}px`, fontSize: `${Typography.fontSize.xs}px`, fontWeight: Typography.fontWeight.semibold }}>
          {compatibilityScore}% Match
        </div>
      </div>

      {/* Media */}
      <div style={{ position: 'relative', width: '100%', backgroundColor: Colors.backgroundSecondary }}>
        <img src={post.media[currentImageIndex].uri} alt="Post media" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
        {post.media.length > 1 && (
          <>
            <button onClick={handlePrevImage} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <Icon name="chevron-left" size={24} color="white" />
            </button>
            <button onClick={handleNextImage} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <Icon name="chevron-right" size={24} color="white" />
            </button>
            <div style={{ position: 'absolute', bottom: `${Spacing.sm}px`, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'row', gap: `${Spacing.xs}px` }}>
              {post.media.map((_, index) => (
                <div key={index} style={{ width: index === currentImageIndex ? '20px' : '8px', height: '8px', borderRadius: `${BorderRadius.full}px`, backgroundColor: index === currentImageIndex ? Colors.white : 'rgba(255,255,255,0.5)', transition: 'all 0.3s ease' }} />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Actions */}
      <div style={{ padding: `${Spacing.md}px`, display: 'flex', flexDirection: 'column', gap: `${Spacing.md}px` }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: `${Spacing.lg}px` }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: `${Spacing.xs}px`, cursor: 'pointer', padding: `${Spacing.xs}px` }} onClick={handleLike}>
            <Icon name="heart" size={24} color={isLiked ? Colors.primary : Colors.textSecondary} />
            <span style={{ fontSize: `${Typography.fontSize.sm}px`, color: Colors.textSecondary, fontWeight: Typography.fontWeight.medium }}>{likesCount}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: `${Spacing.xs}px`, cursor: 'pointer', padding: `${Spacing.xs}px` }} onClick={() => onComment?.(post.id)}>
            <Icon name="message-circle" size={24} color={Colors.textSecondary} />
            <span style={{ fontSize: `${Typography.fontSize.sm}px`, color: Colors.textSecondary, fontWeight: Typography.fontWeight.medium }}>{post.comments}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: `${Spacing.xs}px`, cursor: 'pointer', padding: `${Spacing.xs}px` }} onClick={() => onShare?.(post.id)}>
            <Icon name="share-2" size={24} color={Colors.textSecondary} />
          </div>
        </div>
        <div>
          <p style={{ fontSize: `${Typography.fontSize.base}px`, color: Colors.textPrimary, lineHeight: Typography.lineHeight.normal }}>
            <strong>{post.user.name}</strong> {post.caption}
          </p>
          <div style={{ fontSize: `${Typography.fontSize.xs}px`, color: Colors.textTertiary, marginTop: `${Spacing.xs}px` }}>{post.timeAgo}</div>
        </div>
      </div>
    </Card>
  );
};
