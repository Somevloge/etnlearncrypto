import { useCourse } from "@/context/CourseContext";
import { courseData } from "@/data/courseData";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import * as LucideIcons from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Lightbulb: LucideIcons.Lightbulb,
  Bitcoin: LucideIcons.Bitcoin,
  Network: LucideIcons.Network,
  Hash: LucideIcons.Hash,
  Pickaxe: LucideIcons.Pickaxe,
  Blocks: LucideIcons.Blocks,
  Wallet: LucideIcons.Wallet,
  KeyRound: LucideIcons.KeyRound,
  Coins: LucideIcons.Coins,
  ArrowLeftRight: LucideIcons.ArrowLeftRight,
  ShieldAlert: LucideIcons.ShieldAlert,
  Gem: LucideIcons.Gem,
  TrendingUp: LucideIcons.TrendingUp,
  Image: LucideIcons.Image,
  BarChart3: LucideIcons.BarChart3,
  LineChart: LucideIcons.LineChart,
};

const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen, currentModuleId, setCurrentModuleId, setViewMode, language } = useCourse();

  const handleModuleClick = (id: number) => {
    setCurrentModuleId(id);
    setViewMode("overview");
    setSidebarOpen(false);
  };

  return (
    <AnimatePresence>
      {sidebarOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
          <motion.aside
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 z-50 h-full w-80 bg-sidebar border-r border-sidebar-border overflow-y-auto"
          >
            <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
              <h2 className="font-display text-lg text-sidebar-primary tracking-wide">Modules</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-1.5 rounded-lg hover:bg-sidebar-accent transition-colors"
              >
                <X className="w-5 h-5 text-sidebar-foreground" />
              </button>
            </div>
            <nav className="p-3 space-y-1">
              {courseData.map((mod) => {
                const Icon = iconMap[mod.icon] || LucideIcons.BookOpen;
                const isActive = mod.id === currentModuleId;
                const content = mod[language];
                const lessonCount = content.lessons.length;

                return (
                  <button
                    key={mod.id}
                    onClick={() => handleModuleClick(mod.id)}
                    className={`w-full flex items-start gap-3 p-3 rounded-lg text-left transition-all duration-200 ${
                      isActive
                        ? "bg-sidebar-accent border border-sidebar-primary/30"
                        : "hover:bg-sidebar-accent/50 border border-transparent"
                    }`}
                  >
                    <div className={`mt-0.5 p-1.5 rounded-md ${isActive ? "bg-sidebar-primary/20" : "bg-sidebar-accent"}`}>
                      <Icon className={`w-4 h-4 ${isActive ? "text-sidebar-primary" : "text-sidebar-foreground/70"}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs font-medium ${isActive ? "text-sidebar-primary" : "text-sidebar-foreground/50"}`}>
                        Module {mod.id}
                      </p>
                      <p className={`text-sm font-medium truncate ${isActive ? "text-sidebar-foreground" : "text-sidebar-foreground/80"}`}>
                        {content.title}
                      </p>
                      {lessonCount > 0 && (
                        <p className="text-xs text-sidebar-foreground/40 mt-0.5">{lessonCount} lessons</p>
                      )}
                    </div>
                  </button>
                );
              })}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
