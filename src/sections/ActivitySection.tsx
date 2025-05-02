import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ActivityItem from '../components/ActivityItem';

const ActivitySection: React.FC = () => {
  const activities = [
    {
      id: 1,
      user: 'Kate Stanley',
      action: 'commented',
      content: 'This film blew my mind! It captures the audio...',
      time: '2 minutes ago',
    },
    {
      id: 2,
      user: 'John Starkiller',
      action: 'added a new video',
      content: 'Creative process from fiction to action...',
      time: '1 hour ago',
    },
    {
      id: 3,
      user: 'John Starkiller',
      action: 'shared a document',
      content: 'How to become an expert?',
      time: '1 day ago',
    },
    {
      id: 4,
      user: 'Arjun Lakshman',
      action: 'created new badges',
      content: 'Performance badges for team projects...',
      time: '2 days ago',
    },
    {
      id: 5,
      user: 'Kate Stanley',
      action: 'started a new video',
      content: 'How do I start a vehicle design project?',
      time: '3 days ago',
    },
    {
      id: 6,
      user: 'John Starkiller',
      action: 'shared a video',
      content: 'Game marketing tricks',
      time: '5 days ago',
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Activity</h2>
        <div className="text-sm space-x-3">
          <button className="text-cream text-opacity-80 hover:text-opacity-100 transition-opacity">
            View timeline
          </button>
          <span className="text-cream text-opacity-60">|</span>
          <button className="text-cream text-opacity-80 hover:text-opacity-100 transition-opacity">
            Filter activities
          </button>
        </div>
      </div>
      <div className="bg-cream bg-opacity-90 rounded p-4 text-burgundy">
        {activities.map((activity) => (
          <ActivityItem
            key={activity.id}
            user={activity.user}
            action={activity.action}
            content={activity.content}
            time={activity.time}
          />
        ))}
      </div>
    </>
  );
};

export default ActivitySection;