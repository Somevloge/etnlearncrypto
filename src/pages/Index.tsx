import { CourseProvider, useCourse } from "@/context/CourseContext";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import ModuleOverview from "@/components/views/ModuleOverview";
import LessonList from "@/components/views/LessonList";
import LessonView from "@/components/views/LessonView";
import { ScrollArea } from "@/components/ui/scroll-area";

const ContentRouter = () => {
  const { viewMode } = useCourse();

  switch (viewMode) {
    case "lessons":
      return <LessonList />;
    case "reading":
      return <LessonView />;
    default:
      return <ModuleOverview />;
  }
};

const AppShell = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <Sidebar />
      <ScrollArea className="flex-1">
        <main className="min-h-[calc(100vh-8rem)]">
          <ContentRouter />
        </main>
      </ScrollArea>
      <Footer />
    </div>
  );
};

const Index = () => {
  return (
    <CourseProvider>
      <AppShell />
    </CourseProvider>
  );
};

export default Index;
