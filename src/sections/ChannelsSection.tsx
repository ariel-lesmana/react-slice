import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ContentCard from '../components/ContentCard';

const ChannelsSection: React.FC = () => {
  const channels = [
    {
      id: 1,
      name: 'Google',
      imageUrl: 'https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      name: 'Dribbble',
      imageUrl: 'https://images.pexels.com/photos/5017294/pexels-photo-5017294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      name: 'Microsoft',
      imageUrl: 'https://images.pexels.com/photos/374559/pexels-photo-374559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 4,
      name: 'Behance',
      imageUrl: 'https://images.pexels.com/photos/1269158/pexels-photo-1269158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 5,
      name: 'Weather Channel',
      imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 6,
      name: 'Guruș',
      imageUrl: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 7,
      name: 'iMedia',
      imageUrl: 'https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 8,
      name: 'CreativeEye',
      imageUrl: 'https://images.pexels.com/photos/3137055/pexels-photo-3137055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 9,
      name: 'Khan Studios',
      imageUrl: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 10,
      name: 'Yahoo',
      imageUrl: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Channels</h2>
        <div className="text-sm">
          <button className="text-cream text-opacity-80 hover:text-opacity-100 transition-opacity">
            Browse all channels
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {channels.map((channel) => (
          <ContentCard
            key={channel.id}
            title={channel.name}
            imageUrl={channel.imageUrl}
            aspectRatio="square"
          />
        ))}
      </div>
    </>
  );
};

export default ChannelsSection;