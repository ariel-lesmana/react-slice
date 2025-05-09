import Header from './components/Header';
import NavigationTabs from './components/NavigationTabs';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-burgundy text-cream">
      <Header />
      <NavigationTabs />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;