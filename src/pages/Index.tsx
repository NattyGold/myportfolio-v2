import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Lazy load sections below the fold
const About = lazy(() => import("@/components/About"));
const Projects = lazy(() => import("@/components/Projects"));
const Experience = lazy(() => import("@/components/Experience"));
const Tools = lazy(() => import("@/components/Tools"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Projects />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Experience />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Tools />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default Index;
