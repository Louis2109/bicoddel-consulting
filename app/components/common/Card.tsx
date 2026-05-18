import styles from '@/app/styles/glassmorphism.module.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  variant?: 'default' | 'dark';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = true,
  variant = 'default',
}) => {
  const baseClasses = `${styles.glassCard} w-full`;
  const hoverableClasses = hoverable ? styles.glassCard : '';
  const variantClasses = variant === 'dark' ? 'bg-black/10 border-black/10' : '';

  const combinedClasses = `${baseClasses} ${hoverableClasses} ${variantClasses} ${className}`;

  return <div className={combinedClasses}>{children}</div>;
};

export default Card;
