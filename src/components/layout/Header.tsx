import { Menu, Globe } from "lucide-react";
import { useCourse } from "@/context/CourseContext";
import { motion } from "framer-motion";

const Header = () => {
  const { toggleSidebar, language, setLanguage } = useCourse();

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between px-4 py-3 glass-card border-0 border-b border-border">
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg transition-colors hover:bg-secondary"
          aria-label="Toggle sidebar menu"
        >
          <Menu className="w-6 h-6 text-primary" />
        </button>
        <div className="flex items-center gap-2">
          <motion.div
            className="w-8 h-8 rounded-lg flex items-center justify-center font-display text-lg bg-primary text-primary-foreground"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            E
          </motion.div>
          <span className="font-display text-xl tracking-wider text-foreground">
            ETN <span className="text-primary">Learn</span>
          </span>
        </div>
      </div>

      <button
        onClick={() => setLanguage(language === "en" ? "am" : "en")}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-card-hover text-sm font-medium"
      >
        <Globe className="w-4 h-4 text-primary" />
        <span className="text-foreground">{language === "en" ? "EN" : "አማ"}</span>
      </button>
    </header>
  );
};

export default Header;
