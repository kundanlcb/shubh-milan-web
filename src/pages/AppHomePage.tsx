import { PostCard } from '@/components/home/PostCard';
import { Colors, Typography, Spacing } from '@/constants/styles';
import { allUsers } from '@/utils/homeData';

export const AppHomePage = () => {
  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: Colors.background,
    paddingBottom: `${Spacing.xl}px`,
  };

  const headerStyle = {
    backgroundColor: Colors.backgroundCard,
    padding: `${Spacing.md}px`,
    borderBottom: `1px solid ${Colors.border}`,
    position: 'sticky' as const,
    top: 0,
    zIndex: 10,
  };

  const titleStyle = {
    fontSize: `${Typography.fontSize['2xl']}px`,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.primary,
    textAlign: 'center' as const,
  };

  const feedStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: `${Spacing.md}px`,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: `${Spacing.lg}px`,
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <h1 style={titleStyle}>शुभ मिलन</h1>
      </div>

      {/* Feed */}
      <div style={feedStyle}>
        {allUsers.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onLike={(id) => console.log('Liked post:', id)}
            onProfile={(id) => console.log('View profile:', id)}
            onComment={(id) => console.log('Comment on post:', id)}
            onShare={(id) => console.log('Share post:', id)}
          />
        ))}
      </div>
    </div>
  );
};
