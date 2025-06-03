
import Hero from "@/components/Hero";
import ProgramDetails from "@/components/ProgramDetails";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6B6CCC] via-[#5A5BB8] to-[#4A4BA4] relative overflow-hidden">
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
