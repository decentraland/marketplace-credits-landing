
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 rounded-3xl p-12 border border-purple-500/30 backdrop-blur-sm">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Level Up Your Avatar?
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Jump into Decentraland now and start earning up to <span className="text-cyan-400 font-semibold">64 free Credits</span> 
            to customize your look with amazing Wearables and Emotes
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-10 py-6 text-xl font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://decentraland.org/download', '_blank')}
            >
              <Download className="mr-3 h-6 w-6" />
              Download Decentraland
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 px-10 py-6 text-xl rounded-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://play.decentraland.org', '_blank')}
            >
              Play in Browser
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-2xl mb-2">🎮</div>
              <div className="text-white font-semibold mb-1">Join the Beta</div>
              <div className="text-gray-300 text-sm">Limited 8-week program</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-2xl mb-2">💎</div>
              <div className="text-white font-semibold mb-1">Support Creators</div>
              <div className="text-gray-300 text-sm">Help artists thrive</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-2xl mb-2">✨</div>
              <div className="text-white font-semibold mb-1">Express Yourself</div>
              <div className="text-gray-300 text-sm">Customize your avatar</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
