import { useState } from "react";
import {
    Zap,
    MapPin,
    Monitor,
    BarChart3,
    Target,
    Cpu,
    Building2,
    Hash
} from "lucide-react";

const iconMap = {
    "All": Zap,
    "OOH": MapPin,
    "DOOH": Monitor,
    "Analytics": BarChart3,
    "Campaigns": Target,
    "Technology": Cpu,
    "Industry": Building2,
};

export default function CategoryBar({ posts = [], onSelectCategory }) {
    const [active, setActive] = useState("All");

    // Extract unique categories from posts
    const dynamicCategories = posts.reduce((acc, post) => {
        const cat = post.category || "General";
        if (!acc.includes(cat) && cat !== "All") {
            acc.push(cat);
        }
        return acc;
    }, []);

    // Build the final categories list starting with All, appending static ones that exist in the data, then others
    const categories = [
        { label: "All", icon: iconMap["All"] },
        ...dynamicCategories.map(cat => ({
            label: cat,
            icon: iconMap[cat] || Hash // Use Hash as a fallback icon for unknown categories
        }))
    ];

    const handleCategoryClick = (label) => {
        setActive(label);
        if (onSelectCategory) {
            onSelectCategory(label);
        }
    };

    return (
        <div className="border-b border-slate-100 bg-slate-50/50">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="flex items-center gap-1 py-2 overflow-x-auto">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <button
                                key={cat.label}
                                onClick={() => handleCategoryClick(cat.label)}
                                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${active === cat.label
                                        ? "bg-primary text-white shadow-sm"
                                        : "text-slate-500 hover:bg-slate-100 hover:text-primary"
                                    }`}
                            >
                                <Icon size={15} strokeWidth={2} />
                                {cat.label}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
