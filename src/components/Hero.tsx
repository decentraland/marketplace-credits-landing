import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden">
      {/* Background gradient using black */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Floating logo-inspired shapes */}
      <div className="absolute inset-0 opacity-20 z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-dcl-lavender to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-dcl-purple to-dcl-lavender rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400 to-dcl-purple rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        {/* Logo placement */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <img src="/lovable-uploads/58341ed4-a73f-4046-a98d-3a273a096a74.png" alt="Decentraland Logo" className="w-32 h-32 md:w-40 md:h-40 drop-shadow-2xl hover:scale-110 transition-transform duration-300" />
        </div>
        
        <div className="inline-block px-6 py-3 bg-gradient-to-r from-dcl-ruby/20 to-dcl-orange/20 rounded-full border border-dcl-ruby/30 mb-8 animate-fade-in backdrop-blur-sm">
          <span className="text-dcl-ruby font-semibold text-lg">🔥 New Beta Program Live</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-dcl-white mb-8 leading-tight animate-fade-in">
          Marketplace
          <span className="bg-gradient-to-r from-dcl-ruby via-dcl-orange to-dcl-yellow bg-clip-text text-transparent">
            {" "}Credits
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-dcl-white mb-10 max-w-3xl mx-auto animate-fade-in leading-relaxed">
          Earn up to <span className="text-dcl-ruby font-bold">8 Credits weekly</span> in Decentraland 
          to customize your avatar with Wearables and Emotes
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in mb-12">
          <Button size="lg" className="bg-gradient-to-r from-dcl-ruby to-dcl-orange hover:from-dcl-ruby/90 hover:to-dcl-orange/90 text-white px-10 py-8 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border border-dcl-ruby/30" onClick={() => window.open('https://decentraland.org/download', '_blank')}>
            <Download className="mr-3 h-6 w-6" />
            Download Decentraland
          </Button>
          
          <Button variant="outline" size="lg" onClick={() => document.getElementById('details')?.scrollIntoView({
          behavior: 'smooth'
        })} className="border-2 border-dcl-white/50 hover:bg-dcl-white/10 hover:border-dcl-white px-10 py-8 text-xl rounded-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm text-red-500">
            Learn More
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gradient-to-br from-dcl-ruby/20 to-dcl-orange/20 backdrop-blur-md rounded-2xl p-8 border border-dcl-ruby/30 hover:border-dcl-ruby/50 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-dcl-ruby mb-3">8</div>
            <div className="text-dcl-white text-lg">Credits per week</div>
          </div>
          <div className="bg-gradient-to-br from-dcl-orange/20 to-dcl-yellow/20 backdrop-blur-md rounded-2xl p-8 border border-dcl-orange/30 hover:border-dcl-orange/50 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-dcl-orange mb-3">64</div>
            <div className="text-dcl-white text-lg">Total Credits available</div>
          </div>
          <div className="bg-gradient-to-br from-dcl-yellow/20 to-dcl-lavender/20 backdrop-blur-md rounded-2xl p-8 border border-dcl-yellow/30 hover:border-dcl-yellow/50 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-dcl-yellow mb-3">FREE</div>
            <div className="text-dcl-white text-lg">Wearables & Emotes</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
