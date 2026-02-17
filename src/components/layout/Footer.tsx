import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCourse } from "@/context/CourseContext";
import { courseData } from "@/data/courseData";

const Footer = () => {
  const { currentModuleId, setCurrentModuleId, setViewMode } = useCourse();

  const goToPrev = () => {
    if (currentModuleId > 1) {
      setCurrentModuleId(currentModuleId - 1);
      setViewMode("overview");
    }
  };

  const goToNext = () => {
    if (currentModuleId < courseData.length) {
      setCurrentModuleId(currentModuleId + 1);
      setViewMode("overview");
    }
  };

  return (
    <footer className="sticky bottom-0 z-30 flex items-center justify-between px-4 py-3 glass-card border-0 border-t border-border">
      <button
        onClick={goToPrev}
        disabled={currentModuleId <= 1}
        className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed text-foreground"
      >
        <ChevronLeft className="w-4 h-4" />
        Prev
      </button>

      <span className="text-sm font-medium text-muted-foreground">
        Module {currentModuleId} / {courseData.length}
      </span>

      <button
        onClick={goToNext}
        disabled={currentModuleId >= courseData.length}
        className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed text-foreground"
      >
        Next
        <ChevronRight className="w-4 h-4" />
      </button>
    </footer>
  );
};

export default Footer;
