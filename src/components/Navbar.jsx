const headlines = [
    "DOOH advertising spend projected to grow 12% in 2025",
    "Adnoxy launches AI-powered billboard targeting platform",
    "Transit media ROI hits all-time high across metro cities",
    "New programmatic OOH standards released by industry consortium",
    "Location intelligence reshapes out-of-home campaign planning",
];

export default function Navbar() {
    return (
        <>
            {/* Breaking news ticker */}
            <div className="bg-primary text-white overflow-hidden">
                <div className="max-w-[1280px] mx-auto flex items-center">
                    <span className="shrink-0 bg-accent text-primary text-[10px] font-extrabold uppercase tracking-wide px-3 py-1.5">
                        Breaking
                    </span>
                    <div className="overflow-hidden flex-1 py-1.5">
                        <div className="ticker-scroll flex items-center gap-10 whitespace-nowrap">
                            {[...headlines, ...headlines].map((h, i) => (
                                <span key={i} className="text-[12px] font-medium text-white/80">
                                    •&nbsp;&nbsp;{h}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main nav */}
            <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <a href="/" className="flex items-center gap-2.5 group">
                            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center rotate-45 group-hover:rotate-[405deg] transition-transform duration-500">
                                <svg className="-rotate-45" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2L2 12L12 22L22 12L12 2Z" fill="#BEF264" />
                                    <path d="M12 7L7 12L12 17L17 12L12 7Z" fill="#1E293B" />
                                </svg>
                            </div>
                            <span className="font-serif font-bold text-xl text-primary tracking-tight">
                                Adnoxy News
                            </span>
                        </a>

                        {/* Nav links */}
                        <div className="hidden md:flex items-center gap-8">
                            <a href="/" className="text-sm font-medium text-primary border-b-2 border-accent pb-0.5">
                                Home
                            </a>
                            <a href="#" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">
                                Industry
                            </a>
                            <a href="#" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">
                                Insights
                            </a>
                            <a href="#" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">
                                Reports
                            </a>
                            <a
                                href="https://adnoxy.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium text-slate-500 hover:text-primary transition-colors flex items-center gap-1"
                            >
                                Visit Adnoxy
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                            </a>
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-3">
                            <button className="text-slate-400 hover:text-primary transition-colors p-2">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.3-4.3" />
                                </svg>
                            </button>
                            <a
                                href="https://adnoxy.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors flex items-center gap-1.5"
                            >
                                Get Started
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
