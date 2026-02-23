export default function TopStory({ posts = [], onNavigateToPost }) {
    if (!posts || posts.length === 0) {
        return null; // Or a skeleton loader
    }

    const topStory = posts[0];
    const sidePicks = posts.slice(1, 3); // Get next 2 posts

    // Format date nicely
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    return (
        <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Top Story */}
                <article
                    className="lg:col-span-2 group cursor-pointer"
                    onClick={() => onNavigateToPost?.(topStory)}
                >
                    <div className="relative overflow-hidden rounded-2xl">
                        <img
                            src={topStory.coverImage || "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&h=700&fit=crop"}
                            alt={topStory.title}
                            className="w-full aspect-[16/9] object-cover group-hover:scale-[1.03] transition-transform duration-700"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                        {/* Content overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="bg-accent text-primary text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                                    {topStory.category || "News"}
                                </span>
                                <span className="text-white/60 text-xs">{formatDate(topStory.publishedAt)}</span>
                            </div>
                            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
                                {topStory.title}
                            </h1>
                            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl line-clamp-2 hidden md:block">
                                {topStory.excerpt}
                            </p>
                            <div className="mt-4 flex items-center gap-2">
                                {topStory.authorImage ? (
                                    <img src={topStory.authorImage} alt={topStory.author} className="w-6 h-6 rounded-full object-cover border border-white/20" />
                                ) : (
                                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 2L2 12L12 22L22 12L12 2Z" fill="#BEF264" />
                                            <path d="M12 7L7 12L12 17L17 12L12 7Z" fill="white" />
                                        </svg>
                                    </div>
                                )}
                                <span className="text-white/80 text-xs font-medium">{topStory.author || "Adnoxy"}</span>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Side Picks */}
                <div className="flex flex-col gap-4">
                    <h3 className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-1">
                        Editor's Picks
                    </h3>
                    {sidePicks.map((pick, i) => (
                        <article
                            key={pick.id || i}
                            className="group cursor-pointer flex-1"
                            onClick={() => onNavigateToPost?.(pick)}
                        >
                            <div className="relative overflow-hidden rounded-xl h-full">
                                <img
                                    src={pick.coverImage || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"}
                                    alt={pick.title}
                                    className="w-full h-full min-h-[150px] object-cover group-hover:scale-[1.03] transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="bg-accent/90 text-primary text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                                            {pick.category || "News"}
                                        </span>
                                        <span className="text-white/50 text-[10px]">{formatDate(pick.publishedAt)}</span>
                                    </div>
                                    <h3 className="font-serif text-sm md:text-base font-bold text-white leading-snug line-clamp-2">
                                        {pick.title}
                                    </h3>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
