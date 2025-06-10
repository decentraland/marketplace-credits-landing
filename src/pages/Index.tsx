
import Hero from "@/components/Hero";
import ProgramDetails from "@/components/ProgramDetails";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Header />
      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <ProgramDetails />
        <FAQ />
        <FinalCTA />
      </div>
    </div>
  );
};

export default Index;
