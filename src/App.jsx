import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CategoryBar from "./components/CategoryBar";
import TopStory from "./components/TopStory";
import NewsFeed from "./components/NewsFeed";
import SpotlightSection from "./components/SpotlightSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { NewsService } from "./services/newsService";
import NewsDetailPage from "./pages/NewsDetailPage";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentView, setCurrentView] = useState("home");
  const [loading, setLoading] = useState(true);

  // Initial Data Fetch
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const data = await NewsService.getAllPosts();
      setPosts(data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Handle URL changes and Direct Links (Basic Routing)
  useEffect(() => {
    if (loading) return;

    const params = new URLSearchParams(window.location.search);
    const postSlug = params.get("post");

    if (postSlug) {
      const foundPost = posts.find((p) => p.slug === postSlug);
      if (foundPost) {
        setSelectedPost(foundPost);
        setCurrentView("post");
      }
    } else {
      setSelectedPost(null);
      setCurrentView("home");
    }
  }, [loading, posts]);

  const handleNavigateHome = () => {
    window.history.pushState({}, "", window.location.pathname);
    setCurrentView("home");
    setSelectedPost(null);
    window.scrollTo(0, 0);
  };

  const handleNavigateToPost = (post) => {
    const newUrl = `${window.location.pathname}?post=${post.slug}`;
    window.history.pushState({ slug: post.slug }, "", newUrl);
    setCurrentView("post");
    setSelectedPost(post);
    window.scrollTo(0, 0);
  };

  // Handle browser back button
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const postSlug = params.get("post");

      if (postSlug) {
        const found = posts.find((p) => p.slug === postSlug);
        if (found) {
          setSelectedPost(found);
          setCurrentView("post");
        }
      } else {
        setSelectedPost(null);
        setCurrentView("home");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [posts]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar posts={posts} onNavigateHome={handleNavigateHome} />
      <CategoryBar posts={posts} />

      <main className="flex-grow">
        {loading ? (
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : currentView === "post" && selectedPost ? (
          <NewsDetailPage
            post={selectedPost}
            onNavigateHome={handleNavigateHome}
          />
        ) : (
          <>
            <TopStory
              posts={posts}
              onNavigateToPost={handleNavigateToPost}
            />
            <NewsFeed
              posts={posts}
              onNavigateToPost={handleNavigateToPost}
            />
            <SpotlightSection
              posts={posts}
              onNavigateToPost={handleNavigateToPost}
            />
          </>
        )}
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
