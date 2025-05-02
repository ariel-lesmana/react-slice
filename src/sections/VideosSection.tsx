import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ContentCard from '../components/ContentCard';

const VideosSection: React.FC = () => {
  const videos = [
    {
      id: 1,
      title: 'How to improve your skills',
      author: 'Waseem Arshad',
      views: 187967,
      imageUrl: 'https://images.pexels.com/photos/4047801/pexels-photo-4047801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      title: 'Design principles everyone should know',
      author: 'Michael Knight',
      views: 14595,
      imageUrl: 'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      title: 'Frontend development basics 2023',
      author: 'Ahmed Yasin',
      views: 7395,
      imageUrl: 'https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 4,
      title: 'Getting started with UX design',
      author: 'John Starkiller',
      views: 23546,
      imageUrl: 'https://images.pexels.com/photos/5313361/pexels-photo-5313361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 5,
      title: 'Introduction to web accessibility',
      author: 'John Doe',
      views: 25345,
      imageUrl: 'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <>
      <SectionHeader title="Videos" browseText="videos" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.slice(0, 5).map((video) => (
          <ContentCard
            key={video.id}
            title={video.title}
            author={video.author}
            views={video.views}
            imageUrl={video.imageUrl}
            aspectRatio="video"
            className={video.id === 1 ? "sm:col-span-2 sm:row-span-2" : ""}
          />
        ))}
        <ContentCard
          uploadCard
          uploadType="Own Video"
          className="aspect-video"
        />
      </div>
    </>
  );
};

export default VideosSection;