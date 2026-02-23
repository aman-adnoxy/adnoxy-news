import { useEffect } from "react";
import { ArrowLeft, Clock, Calendar, User, Share2, Bookmark, ChevronRight } from "lucide-react";

export default function NewsDetailPage({ post, onNavigateHome }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [post]);

    if (!post) return null;

    const formatDate = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        });
    };

    return (
        <article className="bg-[#FAFAFA] min-h-screen pb-20">
            {/* Breadcrumb / Back Navigation */}
            <div className="max-w-[1000px] mx-auto px-6 lg:px-8 pt-8 pb-4">
                <button
                    onClick={onNavigateHome}
                    className="group flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors mb-6"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to News
                </button>

                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
                    <span className="text-primary hover:text-accent cursor-pointer transition-colors" onClick={onNavigateHome}>News</span>
                    <ChevronRight size={12} />
                    <span className="text-accent">{post.category || "General"}</span>
                </div>

                {/* Header content */}
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-[1.15] tracking-tight mb-8">
                    {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-y-4 gap-x-8 text-sm text-slate-500 font-medium">
                    <div className="flex items-center gap-3">
                        {post.authorImage ? (
                            <img
                                src={post.authorImage}
                                alt={post.author}
                                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                            />
                        ) : (
                            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-primary font-bold">
                                <User size={18} />
                            </div>
                        )}
                        <div>
                            <div className="text-primary font-bold">{post.author || "Adnoxy Editorial"}</div>
                            <div className="text-xs">{post.authorRole || "Staff Writer"}</div>
                        </div>
                    </div>
                    <div className="h-8 w-px bg-slate-200 hidden md:block"></div>
                    <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-slate-400" />
                        {formatDate(post.publishedAt)}
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock size={16} className="text-slate-400" />
                        {post.readTime || "5 min read"}
                    </div>
                </div>
            </div>

            {/* Hero Image */}
            {post.coverImage && (
                <div className="max-w-[1280px] mx-auto px-4 lg:px-8 my-10">
                    <div className="relative aspect-[21/9] md:aspect-[2.5/1] rounded-2xl overflow-hidden shadow-lg group">
                        <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                        />
                    </div>
                </div>
            )}

            {/* Main Content Area */}
            <div className="max-w-[1000px] mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-12 mt-12 relative">
                {/* Social Sharing Sidebar - Sticky */}
                <div className="lg:w-16 hidden lg:block shrink-0">
                    <div className="sticky top-32 flex flex-col gap-4">
                        <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary hover:shadow-md transition-all">
                            <Share2 size={18} />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary hover:shadow-md transition-all">
                            <Bookmark size={18} />
                        </button>
                        <div className="w-10 h-px bg-slate-200 my-2"></div>
                        {/* Can add more social icons here */}
                    </div>
                </div>

                {/* Markdown Content */}
                <div className="flex-1 min-w-0">
                    <div
                        className="prose prose-slate lg:prose-lg max-w-none 
              prose-headings:font-serif prose-headings:text-primary 
              prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
              prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-accent prose-a:no-underline hover:prose-a:text-accent-dark hover:prose-a:underline
              prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-slate-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:italic prose-blockquote:text-slate-700
              prose-img:rounded-xl prose-img:shadow-md
              prose-strong:text-primary prose-strong:font-bold
              prose-ul:list-disc prose-ol:list-decimal prose-li:my-2"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                        <div className="mt-16 pt-8 border-t border-slate-200">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
                                Related Topics
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1.5 bg-slate-100 text-slate-600 text-sm font-medium rounded-lg hover:bg-slate-200 hover:text-primary cursor-pointer transition-colors"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Mobile Sharing Row */}
                    <div className="lg:hidden flex items-center gap-4 mt-8 pt-8 border-t border-slate-200">
                        <span className="font-bold text-sm text-slate-500 uppercase tracking-widest mr-2">Share</span>
                        <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary hover:shadow-md transition-all">
                            <Share2 size={18} />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary hover:shadow-md transition-all">
                            <Bookmark size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}
