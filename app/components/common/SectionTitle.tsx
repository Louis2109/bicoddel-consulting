interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  const centerClasses = centered ? 'text-center' : '';

  return (
    <div className={`${centerClasses} ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4 tracking-wide">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
