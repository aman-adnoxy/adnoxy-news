export default function SpotlightSection({ posts = [], onNavigateToPost }) {
    if (!posts || posts.length === 0) return null;

    // Use posts that haven't been featured in TopStory or NewsFeed
    // We used 18 posts so far: 0-2 (TopStory), 3-9 (Main Articles), 10-14 (Trending), 15-17 (Must Read)
    const spotlightArticles = posts.slice(18, 21);

    if (spotlightArticles.length === 0) return null; // Don't render if we run out of posts

    return (
        <section className="bg-slate-50 py-14">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="divider-accent" />
                        <h2 className="font-serif text-2xl font-bold">In the Spotlight</h2>
                    </div>
                    <button className="text-sm font-semibold text-primary hover:text-slate-600 transition-colors flex items-center gap-1">
                        View all
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {spotlightArticles.map((article, i) => (
                        <article
                            key={article.id || i}
                            onClick={() => onNavigateToPost?.(article)}
                            className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={article.coverImage || "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop"}
                                    alt={article.title}
                                    className="w-full aspect-[3/2] object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-3 left-3 flex items-center gap-2">
                                    <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                                        {article.category || "News"}
                                    </span>
                                </div>
                            </div>
                            <div className="p-5">
                                <span className="text-[11px] text-slate-400 font-medium block mb-2">
                                    {article.readTime || "5 min read"}
                                </span>
                                <h3 className="font-serif text-lg font-bold leading-snug mb-2 line-clamp-2 group-hover:text-slate-600 transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                                    {article.excerpt}
                                </p>
                                <div className="mt-4 flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                                    Read more
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
