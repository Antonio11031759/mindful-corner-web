import Hero from "@/components/Hero";
import About from "@/components/About";
import Specializations from "@/components/Specializations";
import WorkFormat from "@/components/WorkFormat";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Specializations />
      <WorkFormat />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
