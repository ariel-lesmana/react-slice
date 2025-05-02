import React from 'react';

interface ContentCardProps {
  title?: string;
  subtitle?: string;
  views?: number;
  author?: string;
  imageUrl?: string;
  aspectRatio?: 'square' | 'landscape' | 'video';
  children?: React.ReactNode;
  onClick?: () => void;
  uploadCard?: boolean;
  uploadType?: string;
  className?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  subtitle,
  views,
  author,
  imageUrl,
  aspectRatio = 'square',
  children,
  onClick,
  uploadCard = false,
  uploadType = '',
  className = '',
}) => {
  const aspectClasses = {
    square: 'aspect-square',
    landscape: 'aspect-video',
    video: 'aspect-video',
  };

  const formatViews = (count: number): string => {
    if (count >= 1_000_000) {
      return `${(count / 1_000_000).toFixed(1)}M views`;
    } else if (count >= 1_000) {
      return `${(count / 1_000).toFixed(1)}k views`;
    }
    return `${count} views`;
  };

  return (
    <div
      className={`bg-cream bg-opacity-90 text-burgundy rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer ${className}`}
      onClick={onClick}
    >
      {uploadCard ? (
        <div className="flex flex-col items-center justify-center h-full p-4 text-center">
          <div className="w-12 h-12 rounded-full bg-burgundy bg-opacity-20 flex items-center justify-center mb-2">
            <svg
              className="w-6 h-6 text-burgundy"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <p className="text-sm font-medium">
            {uploadType ? `Upload Your ${uploadType}` : 'Upload Content'}
          </p>
        </div>
      ) : (
        <>
          {imageUrl && (
            <div className={`${aspectClasses[aspectRatio]} relative overflow-hidden`}>
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
              {views !== undefined && aspectRatio === 'video' && (
                <div className="absolute bottom-1 right-1 bg-black bg-opacity-50 text-white text-xs py-0.5 px-1 rounded">
                  {formatViews(views)}
                </div>
              )}
            </div>
          )}
          <div className="p-3">
            {title && (
              <h3 className="font-medium text-sm line-clamp-2">{title}</h3>
            )}
            {subtitle && (
              <p className="text-xs text-burgundy text-opacity-80 mt-1">
                {subtitle}
              </p>
            )}
            {author && !subtitle && (
              <p className="text-xs text-burgundy text-opacity-80 mt-1">
                By {author}
              </p>
            )}
            {views !== undefined && aspectRatio !== 'video' && (
              <p className="text-xs text-burgundy text-opacity-70 mt-1">
                {formatViews(views)}
              </p>
            )}
            {children}
          </div>
        </>
      )}
    </div>
  );
};

export default ContentCard;