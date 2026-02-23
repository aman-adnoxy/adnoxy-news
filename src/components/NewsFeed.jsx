export default function NewsFeed({ posts = [], onNavigateToPost }) {
    if (!posts || posts.length === 0) return null;

    // The first 3 posts were used in TopStory (0, 1, 2)
    // We start from index 3 for the main feed
    const mainArticles = posts.slice(3, 10); // Show next 7 posts in main feed
    const trending = posts.slice(10, 15); // Show next 5 in trending
    const mustRead = posts.slice(15, 18); // Show next 3 in must read

    const formatDate = (dateString, format = 'full') => {
        if (!dateString) return '';
        const date = new Date(dateString);
        if (format === 'short') {
            return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        }
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    return (
        <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Main Feed — left 2 columns */}
                <div className="lg:col-span-2">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="divider-accent" />
                            <h2 className="font-serif text-2xl font-bold">Latest Stories</h2>
                        </div>
                        <span className="text-xs text-slate-400 font-medium">
                            Updated {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                        </span>
                    </div>

                    {mainArticles.length > 0 ? (
                        <div className="space-y-6">
                            {mainArticles.map((article, i) => (
                                <article
                                    key={article.id || i}
                                    className="group flex gap-5 cursor-pointer p-4 -mx-4 rounded-xl hover:bg-slate-50 transition-colors"
                                    onClick={() => onNavigateToPost?.(article)}
                                >
                                    <div className="shrink-0 w-48 h-32 overflow-hidden rounded-xl">
                                        <img
                                            src={article.coverImage || "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop"}
                                            alt={article.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-[10px] font-bold text-accent bg-accent/10 uppercase tracking-wider px-2 py-0.5 rounded">
                                                {article.category || "News"}
                                            </span>
                                            <span className="text-[11px] text-slate-400">{formatDate(article.publishedAt, 'short')}</span>
                                            <span className="text-[11px] text-slate-300">•</span>
                                            <span className="text-[11px] text-slate-400">{article.readTime || "5 min read"}</span>
                                        </div>
                                        <h3 className="font-serif text-lg font-bold leading-snug mb-1.5 group-hover:text-slate-600 transition-colors line-clamp-2">
                                            {article.title}
                                        </h3>
                                        <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 hidden md:block">
                                            {article.excerpt}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="py-10 text-center text-slate-500">
                            No more stories available.
                        </div>
                    )}

                    <div className="mt-8 text-center">
                        <button className="text-sm font-semibold text-primary border-2 border-slate-200 rounded-lg px-8 py-3 hover:border-primary hover:bg-primary hover:text-white transition-all">
                            Load More Stories
                        </button>
                    </div>
                </div>

                {/* Sidebar — right column */}
                <aside className="space-y-8">
                    {/* Trending */}
                    {trending.length > 0 && (
                        <div className="bg-slate-50 rounded-2xl p-5">
                            <div className="flex items-center gap-2 mb-4">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#BEF264" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                                    <polyline points="16 7 22 7 22 13" />
                                </svg>
                                <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-primary">
                                    Trending
                                </h3>
                            </div>
                            <div className="space-y-4">
                                {trending.map((item, index) => (
                                    <div
                                        key={item.id || index}
                                        className="flex gap-3 group cursor-pointer"
                                        onClick={() => onNavigateToPost?.(item)}
                                    >
                                        <span className="font-serif text-2xl font-black text-slate-200 leading-none w-8 shrink-0 group-hover:text-accent transition-colors">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <div>
                                            <span className="text-[9px] font-bold text-accent uppercase tracking-wider block mb-0.5">
                                                {item.category || "News"}
                                            </span>
                                            <h4 className="text-[13px] font-semibold leading-snug group-hover:text-slate-600 transition-colors line-clamp-2">
                                                {item.title}
                                            </h4>
                                            <span className="text-[10px] text-slate-400 mt-0.5 block">{formatDate(item.publishedAt, 'short')}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Newsletter mini */}
                    <div className="bg-primary rounded-2xl p-5 text-center">
                        <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#BEF264" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                        </div>
                        <h3 className="font-serif text-lg font-bold text-white mb-2">
                            The OOH Insider
                        </h3>
                        <p className="text-white/50 text-xs mb-4 leading-relaxed">
                            Weekly intelligence on offline advertising trends. Join 10,000+ media buyers.
                        </p>
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-white/15 text-white placeholder:text-white/30 text-sm mb-2.5 focus:outline-none focus:border-accent transition-colors"
                        />
                        <button className="w-full bg-accent text-primary font-bold py-2.5 rounded-lg text-sm hover:bg-accent-dark transition-colors">
                            Subscribe
                        </button>
                    </div>

                    {/* Must Read */}
                    {mustRead.length > 0 && (
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="divider-accent" />
                                <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-primary">
                                    Must Read
                                </h3>
                            </div>
                            <div className="space-y-4">
                                {mustRead.map((item, i) => (
                                    <div
                                        key={item.id || i}
                                        className="flex gap-3 group cursor-pointer"
                                        onClick={() => onNavigateToPost?.(item)}
                                    >
                                        <div className="shrink-0 w-20 h-16 overflow-hidden rounded-lg">
                                            <img
                                                src={item.coverImage || "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=200&h=150&fit=crop"}
                                                alt={item.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-[13px] font-semibold leading-snug group-hover:text-slate-600 transition-colors line-clamp-2">
                                                {item.title}
                                            </h4>
                                            <span className="text-[10px] text-slate-400 mt-1 block">{item.readTime || "5 min"} read</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </aside>
            </div>
        </section>
    );
}
