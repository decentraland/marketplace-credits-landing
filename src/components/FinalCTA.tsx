
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <div className="space-y-8 md:space-y-12">
          <div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 md:mb-8 px-4 drop-shadow-2xl">
              Ready to Level Up Your Avatar?
            </h2>
            
            <p className="text-lg md:text-2xl lg:text-3xl text-white/90 mb-0 max-w-4xl mx-auto leading-relaxed px-4 drop-shadow-lg font-medium">
              Jump into Decentraland now and start earning up to <span className="text-dcl-yellow font-bold">64 free Credits </span> 
              to customize your look with community-made Wearables and Emotes
            </p>
          </div>
          
          <div className="flex justify-center">
            <Button size="lg" className="bg-gradient-to-r from-dcl-ruby to-dcl-orange hover:from-dcl-ruby/90 hover:to-dcl-orange/90 text-white px-8 md:px-12 py-6 md:py-8 text-lg md:text-2xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border-2 border-white/40 drop-shadow-lg" onClick={() => window.open('https://decentraland.org/download', '_blank')}>
              <Download className="mr-3 md:mr-4 h-6 w-6 md:h-7 md:w-7" />
              Download Decentraland
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <div className="text-3xl md:text-4xl">🎮</div>
              <div className="text-white font-bold text-lg md:text-xl drop-shadow-md">Join the Beta</div>
              <div className="text-white/80 text-base md:text-lg drop-shadow-md">Limited 8-week program</div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-3xl md:text-4xl">💎</div>
              <div className="text-white font-bold text-lg md:text-xl drop-shadow-md">Support Creators</div>
              <div className="text-white/80 text-base md:text-lg drop-shadow-md">Help artists thrive</div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-3xl md:text-4xl">✨</div>
              <div className="text-white font-bold text-lg md:text-xl drop-shadow-md">Express Yourself</div>
              <div className="text-white/80 text-base md:text-lg drop-shadow-md">Customize your avatar</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
