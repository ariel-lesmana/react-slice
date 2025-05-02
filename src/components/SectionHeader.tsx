import React from 'react';

interface SectionHeaderProps {
  title: string;
  browseText?: string;
  viewAll?: boolean;
  onViewAllClick?: () => void;
  rightContent?: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  browseText,
  viewAll = false,
  onViewAllClick,
  rightContent,
}) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="text-sm">
        {rightContent || (
          <button
            onClick={onViewAllClick}
            className="text-cream text-opacity-80 hover:text-opacity-100 transition-opacity"
          >
            {viewAll ? 'View all' : browseText ? `Browse all ${browseText}` : ''}
          </button>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;