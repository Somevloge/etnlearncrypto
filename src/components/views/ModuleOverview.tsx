import { useCourse } from "@/context/CourseContext";
import { courseData } from "@/data/courseData";
import { motion } from "framer-motion";
import { BookOpen, Clock } from "lucide-react";
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

const ModuleOverview = () => {
  const { currentModuleId, setViewMode, language } = useCourse();
  const mod = courseData.find((m) => m.id === currentModuleId);
  if (!mod) return null;

  const content = mod[language];
  const Icon = iconMap[mod.icon] || BookOpen;
  const lessonCount = content.lessons.length;

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-8rem)] p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card gold-glow p-8 md:p-12 max-w-lg w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6"
        >
          <Icon className="w-10 h-10 text-primary" />
        </motion.div>

        <p className="text-sm font-medium text-primary mb-2">Module {mod.id}</p>
        <h1 className="font-display text-3xl md:text-4xl text-foreground mb-4 tracking-wide">
          {content.title}
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-8">
          {content.description}
        </p>

        <div className="flex items-center justify-center gap-6 mb-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            <span>{lessonCount} {lessonCount === 1 ? "lesson" : "lessons"}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>~{Math.max(5, lessonCount * 5)} min</span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setViewMode(lessonCount > 0 ? "lessons" : "overview")}
          disabled={lessonCount === 0}
          className="w-full py-3 px-6 rounded-xl font-semibold text-primary-foreground bg-primary transition-all hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {lessonCount > 0 ? "Start Course" : "Coming Soon"}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ModuleOverview;
