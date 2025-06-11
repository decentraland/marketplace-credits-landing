import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/15"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="bg-gradient-to-br from-dcl-ruby/30 via-dcl-orange/30 to-dcl-yellow/30 rounded-2xl md:rounded-3xl p-8 md:p-16 border border-dcl-ruby/40 backdrop-blur-md">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-dcl-white mb-6 md:mb-8 px-4">
            Ready to Level Up Your Avatar?
          </h2>
          
          <p className="text-lg md:text-2xl lg:text-3xl text-gray-200 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Jump into Decentraland now and start earning up to <span className="text-dcl-ruby font-bold text-xl md:text-3xl">64 free Credits</span> 
            to customize your look with amazing Wearables and Emotes
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center mb-8 md:mb-12 px-4">
            <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-dcl-ruby to-dcl-orange hover:from-dcl-ruby/90 hover:to-dcl-orange/90 text-white px-8 md:px-12 py-6 md:py-8 text-lg md:text-2xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border border-dcl-ruby/30" onClick={() => window.open('https://decentraland.org/download', '_blank')}>
              <Download className="mr-3 md:mr-4 h-6 w-6 md:h-7 md:w-7" />
              Download Decentraland
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-16">
            <div className="bg-gradient-to-br from-dcl-ruby/20 to-dcl-orange/20 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-dcl-ruby/30 hover:border-dcl-ruby/50 transition-all duration-300 hover:scale-105">
              <div className="text-2xl md:text-3xl mb-3 md:mb-4">🎮</div>
              <div className="text-dcl-white font-bold mb-2 text-base md:text-lg">Join the Beta</div>
              <div className="text-gray-200 text-sm md:text-base">Limited 8-week program</div>
            </div>
            <div className="bg-gradient-to-br from-dcl-orange/20 to-dcl-yellow/20 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-dcl-orange/30 hover:border-dcl-orange/50 transition-all duration-300 hover:scale-105">
              <div className="text-2xl md:text-3xl mb-3 md:mb-4">💎</div>
              <div className="text-dcl-white font-bold mb-2 text-base md:text-lg">Support Creators</div>
              <div className="text-gray-200 text-sm md:text-base">Help artists thrive</div>
            </div>
            <div className="bg-gradient-to-br from-dcl-yellow/20 to-dcl-lavender/20 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-dcl-yellow/30 hover:border-dcl-yellow/50 transition-all duration-300 hover:scale-105">
              <div className="text-2xl md:text-3xl mb-3 md:mb-4">✨</div>
              <div className="text-dcl-white font-bold mb-2 text-base md:text-lg">Express Yourself</div>
              <div className="text-gray-200 text-sm md:text-base">Customize your avatar</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
