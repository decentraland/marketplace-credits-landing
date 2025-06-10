
import Hero from "@/components/Hero";
import ProgramDetails from "@/components/ProgramDetails";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Header from "@/components/Header";
import useAnalytics from "@/hooks/use-analytics";
import { useEffect } from "react";

const Index = () => {
  const { page } = useAnalytics();

  
  useEffect(() => {
    page('Home', {
      page_title: 'Credit Boost Decentraland Land',
      page_url: window.location.href,
    });
  }, [page]);

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
