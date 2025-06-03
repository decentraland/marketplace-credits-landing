
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 opacity-15">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=1920&h=1080')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-dcl-ruby rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-dcl-orange rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-dcl-yellow rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="bg-gradient-to-br from-dcl-ruby/30 via-dcl-orange/30 to-dcl-yellow/30 rounded-3xl p-16 border border-dcl-ruby/40 backdrop-blur-md">
          <h2 className="text-5xl md:text-7xl font-bold text-dcl-white mb-8">
            Ready to Level Up Your Avatar?
          </h2>
          
          <p className="text-2xl md:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Jump into Decentraland now and start earning up to <span className="text-dcl-ruby font-bold text-3xl">64 free Credits</span> 
            to customize your look with amazing Wearables and Emotes
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-dcl-ruby to-dcl-orange hover:from-dcl-ruby/90 hover:to-dcl-orange/90 text-white px-12 py-8 text-2xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border border-dcl-ruby/30"
              onClick={() => window.open('https://decentraland.org/download', '_blank')}
            >
              <Download className="mr-4 h-7 w-7" />
              Download Decentraland
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-dcl-ruby/50 text-dcl-ruby hover:bg-dcl-ruby/10 hover:border-dcl-ruby px-12 py-8 text-2xl rounded-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              onClick={() => window.open('https://play.decentraland.org', '_blank')}
            >
              Play in Browser
              <ArrowRight className="ml-4 h-7 w-7" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gradient-to-br from-dcl-ruby/20 to-dcl-orange/20 backdrop-blur-sm rounded-2xl p-8 border border-dcl-ruby/30 hover:border-dcl-ruby/50 transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-4">🎮</div>
              <div className="text-dcl-white font-bold mb-2 text-lg">Join the Beta</div>
              <div className="text-gray-200">Limited 8-week program</div>
            </div>
            <div className="bg-gradient-to-br from-dcl-orange/20 to-dcl-yellow/20 backdrop-blur-sm rounded-2xl p-8 border border-dcl-orange/30 hover:border-dcl-orange/50 transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-4">💎</div>
              <div className="text-dcl-white font-bold mb-2 text-lg">Support Creators</div>
              <div className="text-gray-200">Help artists thrive</div>
            </div>
            <div className="bg-gradient-to-br from-dcl-yellow/20 to-dcl-lavender/20 backdrop-blur-sm rounded-2xl p-8 border border-dcl-yellow/30 hover:border-dcl-yellow/50 transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-4">✨</div>
              <div className="text-dcl-white font-bold mb-2 text-lg">Express Yourself</div>
              <div className="text-gray-200">Customize your avatar</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
