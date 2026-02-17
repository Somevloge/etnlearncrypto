import { useCourse } from "@/context/CourseContext";
import { courseData } from "@/data/courseData";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight } from "lucide-react";

const LessonList = () => {
  const { currentModuleId, setCurrentLessonIndex, setViewMode, language } = useCourse();
  const mod = courseData.find((m) => m.id === currentModuleId);
  if (!mod) return null;

  const content = mod[language];

  return (
    <div className="max-w-2xl mx-auto p-4 md:p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <button
          onClick={() => setViewMode("overview")}
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Overview
        </button>

        <h2 className="font-display text-2xl md:text-3xl text-foreground mb-2 tracking-wide">
          {content.title}
        </h2>
        <p className="text-muted-foreground mb-8">{content.description}</p>

        <div className="space-y-2">
          {content.lessons.map((lesson, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              onClick={() => {
                setCurrentLessonIndex(index);
                setViewMode("reading");
              }}
              className="w-full glass-card-hover p-4 flex items-center gap-4 text-left group"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <span className="text-sm font-semibold text-primary">{index + 1}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground truncate">{lesson.title}</p>
                <p className="text-sm text-muted-foreground truncate">{lesson.subtitle}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default LessonList;
