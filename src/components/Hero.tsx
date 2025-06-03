
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&h=1080" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-teal-900/80"></div>
      </div>
      
      {/* Floating Elements inspired by Decentraland */}
      <div className="absolute inset-0 opacity-20 z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-8 animate-fade-in backdrop-blur-sm">
          <span className="text-cyan-300 font-semibold text-lg">🔥 New Beta Program Live</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in">
          Marketplace
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
            {" "}Credits
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-gray-200 mb-10 max-w-3xl mx-auto animate-fade-in leading-relaxed">
          Earn up to <span className="text-cyan-400 font-bold">8 Credits weekly</span> in Decentraland 
          to customize your avatar with Wearables and Emotes
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-10 py-8 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border border-cyan-400/30"
            onClick={() => window.open('https://decentraland.org/download', '_blank')}
          >
            <Download className="mr-3 h-6 w-6" />
            Download Decentraland
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-300 px-10 py-8 text-xl rounded-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl p-8 border border-cyan-400/30 hover:border-cyan-300/50 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-cyan-400 mb-3">8</div>
            <div className="text-gray-200 text-lg">Credits per week</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-teal-500/20 backdrop-blur-md rounded-2xl p-8 border border-purple-400/30 hover:border-purple-300/50 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-purple-400 mb-3">64</div>
            <div className="text-gray-200 text-lg">Total Credits available</div>
          </div>
          <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-md rounded-2xl p-8 border border-teal-400/30 hover:border-teal-300/50 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-teal-400 mb-3">FREE</div>
            <div className="text-gray-200 text-lg">Wearables & Emotes</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
