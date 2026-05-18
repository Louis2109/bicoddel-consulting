import styles from '@/app/styles/glassmorphism.module.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  target?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  href,
  target,
}) => {
  const baseClasses = 'font-semibold transition-all duration-300 rounded-lg inline-block';

  const variantClasses = {
    primary: `${styles.glassButtonPrimary} bg-yellow-400 text-black hover:bg-yellow-500`,
    secondary: `${styles.glassButton} bg-white/80 border-2 border-yellow-400 text-black hover:bg-white/90`,
    tertiary: 'text-yellow-400 underline hover:text-yellow-500 bg-transparent border-none',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-7 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} className={combinedClasses} onClick={() => !disabled && onClick?.()}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
    </button>
  );
};

export default Button;
