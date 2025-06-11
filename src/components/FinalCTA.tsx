
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <div className="bg-gradient-to-br from-dcl-ruby/50 via-dcl-orange/50 to-dcl-yellow/50 rounded-2xl md:rounded-3xl p-8 md:p-16 border-2 border-dcl-ruby/70 backdrop-blur-md shadow-xl">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 md:mb-8 px-4 drop-shadow-2xl">
            Ready to Level Up Your Avatar?
          </h2>
          
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 mb-8 md:mb-12 border border-white/20">
            <p className="text-lg md:text-2xl lg:text-3xl text-white mb-0 max-w-4xl mx-auto leading-relaxed px-4 drop-shadow-lg font-medium">
              Jump into Decentraland now and start earning up to <span className="text-dcl-yellow font-bold text-xl md:text-3xl bg-white/20 px-3 py-1 rounded">64 free Credits</span> 
              to customize your look with amazing Wearables and Emotes
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center mb-8 md:mb-12 px-4">
            <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-dcl-ruby to-dcl-orange hover:from-dcl-ruby/90 hover:to-dcl-orange/90 text-white px-8 md:px-12 py-6 md:py-8 text-lg md:text-2xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border-2 border-white/40 drop-shadow-lg" onClick={() => window.open('https://decentraland.org/download', '_blank')}>
              <Download className="mr-3 md:mr-4 h-6 w-6 md:h-7 md:w-7" />
              Download Decentraland
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-16">
            <div className="bg-gradient-to-br from-black/50 to-black/40 backdrop-blur-md rounded-xl md:rounded-2xl p-6 md:p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 shadow-lg">
              <div className="text-2xl md:text-3xl mb-3 md:mb-4">🎮</div>
              <div className="text-white font-bold mb-2 text-base md:text-lg drop-shadow-md">Join the Beta</div>
              <div className="text-white text-sm md:text-base drop-shadow-md font-medium">Limited 8-week program</div>
            </div>
            <div className="bg-gradient-to-br from-black/50 to-black/40 backdrop-blur-md rounded-xl md:rounded-2xl p-6 md:p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 shadow-lg">
              <div className="text-2xl md:text-3xl mb-3 md:mb-4">💎</div>
              <div className="text-white font-bold mb-2 text-base md:text-lg drop-shadow-md">Support Creators</div>
              <div className="text-white text-sm md:text-base drop-shadow-md font-medium">Help artists thrive</div>
            </div>
            <div className="bg-gradient-to-br from-black/50 to-black/40 backdrop-blur-md rounded-xl md:rounded-2xl p-6 md:p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 shadow-lg">
              <div className="text-2xl md:text-3xl mb-3 md:mb-4">✨</div>
              <div className="text-white font-bold mb-2 text-base md:text-lg drop-shadow-md">Express Yourself</div>
              <div className="text-white text-sm md:text-base drop-shadow-md font-medium">Customize your avatar</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
