
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 mb-6 animate-fade-in">
          <span className="text-purple-300 font-medium">🔥 New Beta Program Live</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
          Marketplace
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {" "}Credits
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
          Earn up to <span className="text-cyan-400 font-semibold">8 Credits weekly</span> in Decentraland 
          to customize your avatar with Wearables and Emotes
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://decentraland.org/download', '_blank')}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Decentraland
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl font-bold text-cyan-400 mb-2">8</div>
            <div className="text-gray-300">Credits per week</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl font-bold text-purple-400 mb-2">64</div>
            <div className="text-gray-300">Total Credits available</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl font-bold text-pink-400 mb-2">FREE</div>
            <div className="text-gray-300">Wearables & Emotes</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
