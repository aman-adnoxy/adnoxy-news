const mainArticles = [
    {
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
        category: "Campaigns",
        timestamp: "3 hours ago",
        readTime: "5 min",
        title: "How Top Brands Are Building Omnichannel Strategies with OOH at the Core",
        description:
            "The world's leading advertisers are no longer treating billboards as standalone media — they're integrating OOH into full-funnel digital campaigns with measurable attribution.",
    },
    {
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
        category: "Technology",
        timestamp: "5 hours ago",
        readTime: "7 min",
        title: "The Rise of Contextual Triggers in Digital Out-of-Home Advertising",
        description:
            "Weather, traffic, sports scores — dynamic creative optimization is enabling billboards to react to real-world conditions in real time.",
    },
    {
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
        category: "Analytics",
        timestamp: "8 hours ago",
        readTime: "4 min",
        title: "Measuring What Matters: New Attribution Models for Offline Campaigns",
        description:
            "Building proper attribution for OOH campaigns to prove ROI and optimize future media spend across markets.",
    },
    {
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
        category: "OOH",
        timestamp: "12 hours ago",
        readTime: "3 min",
        title: "Transit Advertising 2025: Why Buses and Metros Are Premium Real Estate",
        description:
            "Transit media is having a renaissance as urban mobility rebounds. Here's why brands are dramatically increasing investment.",
    },
    {
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop",
        category: "Industry",
        timestamp: "1 day ago",
        readTime: "6 min",
        title: "India's OOH Market Crosses ₹4,000 Crore — What's Driving the Growth?",
        description:
            "Infrastructure expansion, urbanization, and programmatic adoption are fueling India's outdoor advertising boom.",
    },
];

const trending = [
    { rank: 1, category: "DOOH", title: "Programmatic DOOH spend up 34% year-over-year", timestamp: "2h ago" },
    { rank: 2, category: "Analytics", title: "How foot traffic data is reshaping media buying", timestamp: "4h ago" },
    { rank: 3, category: "OOH", title: "The best-performing billboard locations in 2025", timestamp: "5h ago" },
    { rank: 4, category: "Campaigns", title: "Case study: 300% ROI from a hyperlocal OOH campaign", timestamp: "8h ago" },
    { rank: 5, category: "Technology", title: "Computer vision brings real-time audience measurement to billboards", timestamp: "12h ago" },
];

const mustRead = [
    {
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=200&h=150&fit=crop",
        title: "Why Every CMO Should Care About Out-of-Home in 2025",
        readTime: "8 min",
    },
    {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=150&fit=crop",
        title: "The Complete Guide to Billboard Marketplace Analytics",
        readTime: "12 min",
    },
    {
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=200&h=150&fit=crop",
        title: "Adnoxy's 2025 State of OOH Report: Key Takeaways",
        readTime: "10 min",
    },
];

export default function NewsFeed() {
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

                    <div className="space-y-6">
                        {mainArticles.map((article, i) => (
                            <article
                                key={i}
                                className="group flex gap-5 cursor-pointer p-4 -mx-4 rounded-xl hover:bg-slate-50 transition-colors"
                            >
                                <div className="shrink-0 w-48 h-32 overflow-hidden rounded-xl">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="flex-1 min-w-0 flex flex-col justify-center">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-[10px] font-bold text-accent bg-accent/10 uppercase tracking-wider px-2 py-0.5 rounded">
                                            {article.category}
                                        </span>
                                        <span className="text-[11px] text-slate-400">{article.timestamp}</span>
                                        <span className="text-[11px] text-slate-300">•</span>
                                        <span className="text-[11px] text-slate-400">{article.readTime} read</span>
                                    </div>
                                    <h3 className="font-serif text-lg font-bold leading-snug mb-1.5 group-hover:text-slate-600 transition-colors line-clamp-2">
                                        {article.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 hidden md:block">
                                        {article.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <button className="text-sm font-semibold text-primary border-2 border-slate-200 rounded-lg px-8 py-3 hover:border-primary hover:bg-primary hover:text-white transition-all">
                            Load More Stories
                        </button>
                    </div>
                </div>

                {/* Sidebar — right column */}
                <aside className="space-y-8">
                    {/* Trending */}
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
                            {trending.map((item) => (
                                <div key={item.rank} className="flex gap-3 group cursor-pointer">
                                    <span className="font-serif text-2xl font-black text-slate-200 leading-none w-8 shrink-0 group-hover:text-accent transition-colors">
                                        {String(item.rank).padStart(2, "0")}
                                    </span>
                                    <div>
                                        <span className="text-[9px] font-bold text-accent uppercase tracking-wider block mb-0.5">
                                            {item.category}
                                        </span>
                                        <h4 className="text-[13px] font-semibold leading-snug group-hover:text-slate-600 transition-colors line-clamp-2">
                                            {item.title}
                                        </h4>
                                        <span className="text-[10px] text-slate-400 mt-0.5 block">{item.timestamp}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

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
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="divider-accent" />
                            <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-primary">
                                Must Read
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {mustRead.map((item, i) => (
                                <div key={i} className="flex gap-3 group cursor-pointer">
                                    <div className="shrink-0 w-20 h-16 overflow-hidden rounded-lg">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-[13px] font-semibold leading-snug group-hover:text-slate-600 transition-colors line-clamp-2">
                                            {item.title}
                                        </h4>
                                        <span className="text-[10px] text-slate-400 mt-1 block">{item.readTime} read</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
}
