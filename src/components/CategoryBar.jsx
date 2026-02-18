import { useState } from "react";
import {
    Zap,
    MapPin,
    Monitor,
    BarChart3,
    Target,
    Cpu,
    Building2,
} from "lucide-react";

const categories = [
    { label: "All", icon: Zap },
    { label: "OOH", icon: MapPin },
    { label: "DOOH", icon: Monitor },
    { label: "Analytics", icon: BarChart3 },
    { label: "Campaigns", icon: Target },
    { label: "Technology", icon: Cpu },
    { label: "Industry", icon: Building2 },
];

export default function CategoryBar() {
    const [active, setActive] = useState("All");

    return (
        <div className="border-b border-slate-100 bg-slate-50/50">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="flex items-center gap-1 py-2 overflow-x-auto">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <button
                                key={cat.label}
                                onClick={() => setActive(cat.label)}
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
