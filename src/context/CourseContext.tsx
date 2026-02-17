import React, { createContext, useContext, useState, ReactNode } from "react";

type ViewMode = "overview" | "lessons" | "reading";

interface CourseState {
  currentModuleId: number;
  currentLessonIndex: number;
  viewMode: ViewMode;
  language: "en" | "am";
  sidebarOpen: boolean;
  setCurrentModuleId: (id: number) => void;
  setCurrentLessonIndex: (index: number) => void;
  setViewMode: (mode: ViewMode) => void;
  setLanguage: (lang: "en" | "am") => void;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
}

const CourseContext = createContext<CourseState | undefined>(undefined);

export const CourseProvider = ({ children }: { children: ReactNode }) => {
  const [currentModuleId, setCurrentModuleId] = useState(1);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>("overview");
  const [language, setLanguage] = useState<"en" | "am">("en");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <CourseContext.Provider
      value={{
        currentModuleId, setCurrentModuleId,
        currentLessonIndex, setCurrentLessonIndex,
        viewMode, setViewMode,
        language, setLanguage,
        sidebarOpen, setSidebarOpen, toggleSidebar,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => {
  const context = useContext(CourseContext);
  if (!context) throw new Error("useCourse must be used within CourseProvider");
  return context;
};
