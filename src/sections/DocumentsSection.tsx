import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ContentCard from '../components/ContentCard';

const DocumentsSection: React.FC = () => {
  const documents = [
    {
      id: 1,
      title: 'Mobile UI & UX guide 2023',
      author: 'William Mathers',
      views: 187967,
      imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      title: 'HTML 5 made easier',
      author: 'Michael Knight',
      views: 187967,
      imageUrl: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      title: 'How to become an expert?',
      author: 'Ahmed Yasin',
      views: 187967,
      imageUrl: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 4,
      title: '2023 Marketing trends',
      author: 'John Starkiller',
      views: 167887,
      imageUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 5,
      title: '2023 Marketing insights',
      author: 'John Doe',
      views: 125967,
      imageUrl: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <>
      <SectionHeader title="Documents" browseText="documents" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {documents.slice(0, 5).map((document) => (
          <ContentCard
            key={document.id}
            title={document.title}
            author={document.author}
            views={document.views}
            imageUrl={document.imageUrl}
            className={document.id === 1 ? "md:col-span-2 md:row-span-2" : ""}
          />
        ))}
        <ContentCard
          uploadCard
          uploadType="Document"
          className="aspect-square"
        />
      </div>
    </>
  );
};

export default DocumentsSection;