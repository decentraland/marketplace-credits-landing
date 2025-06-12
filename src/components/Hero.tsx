

import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-2 pb-6 overflow-hidden">
      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-block px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-dcl-ruby/40 to-dcl-orange/40 rounded-full border-2 border-dcl-ruby/60 mb-6 md:mb-8 animate-fade-in backdrop-blur-md shadow-lg">
              <span className="text-white font-bold text-sm md:text-lg drop-shadow-lg">🔥 New Beta Program Live</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight animate-fade-in drop-shadow-2xl">
              Marketplace
              <span className="bg-gradient-to-r from-dcl-ruby via-dcl-orange to-dcl-yellow bg-clip-text text-transparent drop-shadow-2xl">
                {" "}Credits
              </span>
            </h1>
            
            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 mb-8 md:mb-10 border border-white/20">
              <p className="text-lg md:text-2xl lg:text-2xl text-white mb-0 max-w-2xl mx-auto lg:mx-0 animate-fade-in leading-relaxed px-4 lg:px-0 drop-shadow-lg font-medium">
                Marketplace Credits are your rewards for engaging in Decentraland, a <span className="text-dcl-ruby font-bold text-xl md:text-2xl bg-white/10 px-2 py-1 rounded">social virtual world</span> where you can connect, explore, and create.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start items-center animate-fade-in">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-dcl-ruby to-dcl-orange hover:from-dcl-ruby/90 hover:to-dcl-orange/90 text-white px-6 md:px-10 py-6 md:py-8 text-lg md:text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border-2 border-white/30 drop-shadow-lg" onClick={() => window.open('https://decentraland.org/download', '_blank')}>
                <Download className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
                Download Decentraland
              </Button>
              
              <Button variant="outline" size="lg" onClick={() => window.open('https://decentraland.org/blog/announcements/marketplace-credits-earn-weekly-rewards-to-power-up-your-look', '_blank')} className="w-full sm:w-auto border-2 border-white/80 bg-white/10 hover:bg-white/20 hover:border-white text-white px-6 md:px-10 py-6 md:py-8 text-lg md:text-xl rounded-2xl transition-all duration-300 hover:scale-105 backdrop-blur-md font-bold drop-shadow-lg">
                Learn More
                <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6" />
              </Button>
            </div>
          </div>

          {/* Right side - Avatar Image (Made Even Bigger) */}
          <div className="flex justify-center lg:justify-end items-center order-1 lg:order-2 animate-fade-in">
            <div className="relative">
              <img 
                src="/lovable-uploads/2d2485d1-5a3d-4a90-89e0-5758004bf19c.png" 
                alt="Decentraland Avatar with Shopping Bags" 
                className="w-[450px] h-[450px] md:w-[600px] md:h-[600px] lg:w-[750px] lg:h-[750px] xl:w-[850px] xl:h-[850px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              {/* Subtle glow effect behind the avatar */}
              <div className="absolute inset-0 bg-gradient-to-r from-dcl-purple/20 to-dcl-lavender/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

