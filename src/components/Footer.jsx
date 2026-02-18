export default function Footer() {
    return (
        <footer className="bg-primary text-white">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <a href="/" className="flex items-center gap-2.5 mb-4">
                            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center rotate-45">
                                <svg className="-rotate-45" width="14" height="14" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2L2 12L12 22L22 12L12 2Z" fill="#BEF264" />
                                    <path d="M12 7L7 12L12 17L17 12L12 7Z" fill="#1E293B" />
                                </svg>
                            </div>
                            <span className="font-serif font-bold text-lg">Adnoxy News</span>
                        </a>
                        <p className="text-sm text-white/50 leading-relaxed">
                            Intelligence-driven insights for the out-of-home advertising industry.
                        </p>
                    </div>

                    {/* News */}
                    <div>
                        <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-accent mb-4">
                            News
                        </h4>
                        <ul className="space-y-2.5">
                            {["OOH Advertising", "DOOH & Programmatic", "Campaign Analytics", "Industry Reports", "Technology"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-accent mb-4">
                            Company
                        </h4>
                        <ul className="space-y-2.5">
                            {["About Adnoxy", "Platform", "Careers", "Contact Us", "Blog"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-accent mb-4">
                            Legal
                        </h4>
                        <ul className="space-y-2.5">
                            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-white/30">
                        © {new Date().getFullYear()} Adnoxy. All rights reserved.
                    </p>
                    <div className="flex items-center gap-5">
                        <a href="#" className="text-white/30 hover:text-accent transition-colors">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        <a href="#" className="text-white/30 hover:text-accent transition-colors">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a href="#" className="text-white/30 hover:text-accent transition-colors">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
