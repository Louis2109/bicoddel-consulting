import styles from '@/app/styles/glassmorphism.module.css';

interface GlassContainerProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  blur?: 'sm' | 'md' | 'lg';
}

export const GlassContainer: React.FC<GlassContainerProps> = ({
  children,
  className = '',
  hoverable = false,
  blur = 'md',
}) => {
  const baseClasses = `${styles.glassContainer}`;
  const hoverClasses = hoverable ? 'hover:backdrop-blur-2xl hover:shadow-xl transition-all duration-300' : '';
  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur',
    lg: 'backdrop-blur-lg',
  };

  const combinedClasses = `${baseClasses} ${hoverClasses} ${blurClasses[blur]} ${className}`;

  return <div className={combinedClasses}>{children}</div>;
};

export default GlassContainer;
