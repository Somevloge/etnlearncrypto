import { useCourse } from "@/context/CourseContext";
import { courseData } from "@/data/courseData";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

const LessonView = () => {
  const { currentModuleId, currentLessonIndex, setCurrentLessonIndex, setViewMode, language } = useCourse();
  const mod = courseData.find((m) => m.id === currentModuleId);
  if (!mod) return null;

  const content = mod[language];
  const lesson = content.lessons[currentLessonIndex];
  if (!lesson) return null;

  const hasPrev = currentLessonIndex > 0;
  const hasNext = currentLessonIndex < content.lessons.length - 1;

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6">
      <motion.div
        key={`${currentModuleId}-${currentLessonIndex}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <button
          onClick={() => setViewMode("lessons")}
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Lessons
        </button>

        <div className="glass-card p-6 md:p-10 mb-6">
          <p className="text-sm font-medium text-primary mb-2">
            Lesson {currentLessonIndex + 1} of {content.lessons.length}
          </p>

          <div
            className="lesson-content"
            dangerouslySetInnerHTML={{ __html: lesson.content }}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={() => hasPrev && setCurrentLessonIndex(currentLessonIndex - 1)}
            disabled={!hasPrev}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed text-foreground"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>
          <button
            onClick={() => hasNext && setCurrentLessonIndex(currentLessonIndex + 1)}
            disabled={!hasNext}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed text-foreground"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default LessonView;
