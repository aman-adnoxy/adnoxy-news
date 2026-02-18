import Navbar from "./components/Navbar";
import CategoryBar from "./components/CategoryBar";
import TopStory from "./components/TopStory";
import NewsFeed from "./components/NewsFeed";
import SpotlightSection from "./components/SpotlightSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CategoryBar />
      <TopStory />
      <NewsFeed />
      <SpotlightSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
