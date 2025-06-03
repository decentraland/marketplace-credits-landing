
import Hero from "@/components/Hero";
import ProgramDetails from "@/components/ProgramDetails";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <ProgramDetails />
      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default Index;
