import React from 'react';

interface ActivityItemProps {
  user: string;
  action: string;
  content: string;
  time: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({
  user,
  action,
  content,
  time,
}) => {
  return (
    <div className="py-3 border-b border-burgundy border-opacity-10 last:border-0">
      <div className="flex items-start">
        <div className="h-7 w-7 rounded-full bg-burgundy bg-opacity-20 text-burgundy flex items-center justify-center text-xs font-medium mr-2 mt-0.5">
          {user.split(' ').map(name => name[0]).join('')}
        </div>
        <div className="flex-1">
          <p className="text-sm mb-1">
            <span className="font-medium">{user}</span>{' '}
            <span className="text-burgundy text-opacity-80">{action}</span>
          </p>
          <p className="text-xs font-medium bg-burgundy bg-opacity-10 rounded p-2 mb-1">
            {content}
          </p>
          <p className="text-xs text-burgundy text-opacity-60">{time}</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityItem;