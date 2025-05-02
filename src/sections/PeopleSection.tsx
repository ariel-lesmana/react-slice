import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ContentCard from '../components/ContentCard';

const PeopleSection: React.FC = () => {
  const people = [
    {
      id: 1,
      name: 'Waseem Arshad',
      title: 'User interface designer',
      views: 187967,
      imageUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      name: 'Michael Knight',
      title: 'Product designer',
      views: 15395,
      imageUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      name: 'Ahmed Yasin',
      title: 'Visual designer',
      views: 26748,
      imageUrl: 'https://images.pexels.com/photos/936043/pexels-photo-936043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 4,
      name: 'John Starkiller',
      title: 'Frontend developer',
      views: 55678,
      imageUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 5,
      name: 'John Doe',
      title: 'UX researcher',
      views: 34523,
      imageUrl: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <>
      <SectionHeader title="People" viewAll={true} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {people.slice(0, 5).map((person) => (
          <ContentCard
            key={person.id}
            title={person.name}
            subtitle={person.title}
            views={person.views}
            imageUrl={person.imageUrl}
            className={person.id === 1 ? "md:col-span-2 md:row-span-2" : ""}
          />
        ))}
        <ContentCard
          uploadCard
          uploadType="work"
          className="aspect-square"
        />
      </div>
    </>
  );
};

export default PeopleSection;