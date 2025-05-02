import React from 'react';
import VideosSection from '../sections/VideosSection';
import ActivitySection from '../sections/ActivitySection';
import PeopleSection from '../sections/PeopleSection';
import ChannelsSection from '../sections/ChannelsSection';
import DocumentsSection from '../sections/DocumentsSection';

const MainContent: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-6 md:px-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Videos Section */}
          <section>
            <VideosSection />
          </section>

          {/* Activity Section - Show on mobile, hide on desktop */}
          <section className="lg:hidden">
            <ActivitySection />
          </section>

          {/* People Section */}
          <section>
            <PeopleSection />
          </section>

          {/* Documents Section */}
          <section>
            <DocumentsSection />
          </section>
        </div>

        <div className="hidden lg:block lg:col-span-1 space-y-6">
          {/* Activity Section - Hide on mobile, show on desktop */}
          <section>
            <ActivitySection />
          </section>

          {/* Channels Section */}
          <section>
            <ChannelsSection />
          </section>
        </div>
      </div>
    </main>
  );
};

export default MainContent;