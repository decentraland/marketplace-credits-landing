import Hero from "@/components/Hero";
import ProgramStats from "@/components/ProgramStats";
import VideoSection from "@/components/VideoSection";
import ProgramDetails from "@/components/ProgramDetails";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedShoppingBags from "@/components/AnimatedShoppingBags";
import useAnalytics from "@/hooks/use-analytics";
import { useEffect } from "react";

const Index = () => {
  const { page, track } = useAnalytics();

  useEffect(() => {
    page('Home', {
      page_title: 'Credit Boost Decentraland Land',
      page_url: window.location.href,
    });
  }, [page]);

  return (
    <div className="min-h-screen bg-black relative">
      {/* Global animated shopping bags background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <AnimatedShoppingBags />
      </div>
      
      <div className="relative z-10">
        <Header />
        <Hero onTrack={track} />
        <ProgramStats />
        <VideoSection onTrack={track} />
        <ProgramDetails />
        <FinalCTA onTrack={track} />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
