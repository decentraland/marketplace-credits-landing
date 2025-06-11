import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden">
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        {/* Logo placement */}
        <div className="flex justify-center mb-6 md:mb-8 animate-fade-in">
          <img src="/lovable-uploads/58341ed4-a73f-4046-a98d-3a273a096a74.png" alt="Decentraland Logo" className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 drop-shadow-2xl hover:scale-110 transition-transform duration-300" />
        </div>
        
        <div className="inline-block px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-dcl-ruby/20 to-dcl-orange/20 rounded-full border border-dcl-ruby/30 mb-6 md:mb-8 animate-fade-in backdrop-blur-sm">
          <span className="text-dcl-ruby font-semibold text-sm md:text-lg">🔥 New Beta Program Live</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-dcl-white mb-6 md:mb-8 leading-tight animate-fade-in">
          Marketplace
          <span className="bg-gradient-to-r from-dcl-ruby via-dcl-orange to-dcl-yellow bg-clip-text text-transparent">
            {" "}Credits
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl lg:text-3xl text-dcl-white mb-8 md:mb-10 max-w-3xl mx-auto animate-fade-in leading-relaxed px-4">
          Earn up to <span className="text-dcl-ruby font-bold">8 Credits weekly</span> in Decentraland 
          to customize your avatar with Wearables and Emotes
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center animate-fade-in mb-8 md:mb-12 px-4">
          <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-dcl-ruby to-dcl-orange hover:from-dcl-ruby/90 hover:to-dcl-orange/90 text-white px-6 md:px-10 py-6 md:py-8 text-lg md:text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border border-dcl-ruby/30" onClick={() => window.open('https://decentraland.org/download', '_blank')}>
            <Download className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
            Download Decentraland
          </Button>
          
          <Button variant="outline" size="lg" onClick={() => window.open('https://decentraland.org/blog/announcements/marketplace-credits-earn-weekly-rewards-to-power-up-your-look', '_blank')} className="w-full sm:w-auto border-2 border-dcl-white/50 hover:bg-dcl-white/10 hover:border-dcl-white px-6 md:px-10 py-6 md:py-8 text-lg md:text-xl rounded-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm text-red-500">
            Learn More
            <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center px-4">
          <div className="bg-gradient-to-br from-dcl-ruby/20 to-dcl-orange/20 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-dcl-ruby/30 hover:border-dcl-ruby/50 transition-all duration-300 hover:scale-105">
            <div className="text-3xl md:text-4xl font-bold text-dcl-ruby mb-2 md:mb-3">8</div>
            <div className="text-dcl-white text-base md:text-lg">Credits per week</div>
          </div>
          <div className="bg-gradient-to-br from-dcl-orange/20 to-dcl-yellow/20 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-dcl-orange/30 hover:border-dcl-orange/50 transition-all duration-300 hover:scale-105">
            <div className="text-3xl md:text-4xl font-bold text-dcl-orange mb-2 md:mb-3">64</div>
            <div className="text-dcl-white text-base md:text-lg">Total Credits available</div>
          </div>
          <div className="bg-gradient-to-br from-dcl-yellow/20 to-dcl-lavender/20 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-dcl-yellow/30 hover:border-dcl-yellow/50 transition-all duration-300 hover:scale-105">
            <div className="text-3xl md:text-4xl font-bold text-dcl-yellow mb-2 md:mb-3">FREE</div>
            <div className="text-dcl-white text-base md:text-lg">Wearables & Emotes</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
