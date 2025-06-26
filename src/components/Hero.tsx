import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import BigDownloadButton from './BigDownloadButton';
import { useCallback } from "react";

interface HeroProps {
  onTrack: (eventName: string, properties?: Record<string, any>) => void;
}

const Hero = ({ onTrack }: HeroProps) => {
  const handleLearnMoreClick = () => {
    onTrack('Learn More Button Clicked', { 
      button_location: 'hero',
      button_text: 'Learn More'
    });
    window.open('https://decentraland.org/blog/announcements/marketplace-credits-earn-weekly-rewards-to-power-up-your-look', '_blank');
  };

  const handleClickDownload = useCallback((event: React.MouseEvent<HTMLButtonElement>, trackingData: any) => {
    if(!trackingData?.url) {
      return;
    }

    onTrack('Download', {
      button_location: 'hero',
      button_text: 'Download Decentraland',
      download_type: trackingData?.type,
      href: trackingData?.url,
      track_uuid: trackingData?.track_uuid,
    });
  }, [onTrack]);

  return <section className="relative min-h-screen flex items-center justify-center px-4 pt-4 pb-6 overflow-hidden">
      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-block px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-dcl-ruby/40 to-dcl-orange/40 rounded-full border-2 border-dcl-ruby/60 mb-6 md:mb-8 animate-fade-in backdrop-blur-md shadow-lg">
              <span className="text-white font-bold text-base md:text-xl drop-shadow-lg">🔥 New Beta Program Live</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 md:mb-8 leading-tight animate-fade-in drop-shadow-2xl">
              Marketplace
              <span className="bg-gradient-to-r from-dcl-ruby via-dcl-orange to-dcl-yellow bg-clip-text text-transparent drop-shadow-2xl">
                {" "}Credits
              </span>
            </h1>
            
            <p className="text-xl md:text-3xl lg:text-3xl text-white mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0 animate-fade-in leading-relaxed px-4 lg:px-0 drop-shadow-lg font-medium">
              <span className="text-dcl-ruby font-bold text-2xl md:text-3xl bg-white/10 px-2 py-1 rounded">You've got unclaimed Credits</span>
              <br />
              Show up. Check in. Stack your rewards before they're gone.
              <br />
              <br />
              🕒 This week's batch expires soon—don't miss it. 
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 md:gap-10 justify-center lg:justify-start items-center animate-fade-in">
              <div className="flex-shrink-0">
                <BigDownloadButton
                  onClick={handleClickDownload}
                  label="Start Earning"
                  trackingId="hero-download"
                />
              </div>
              
              <Button variant="outline" size="lg" onClick={handleLearnMoreClick} className="w-full sm:w-auto border-2 border-white/80 bg-white/10 hover:bg-white/20 hover:border-white text-white px-6 md:px-10 py-6 md:py-8 text-lg md:text-xl rounded-2xl transition-all duration-300 hover:scale-105 backdrop-blur-md font-bold drop-shadow-lg">
                Learn More
                <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6" />
              </Button>
            </div>
          </div>

          {/* Right side - Avatar Image (Made Even Bigger) */}
          <div className="flex justify-center lg:justify-end items-center order-1 lg:order-2 animate-fade-in">
            <div className="relative">
              <img src="/lovable-uploads/3ff4c0ad-bf60-4647-82d8-d53f83fc97a2.png" alt="Decentraland Avatar with Shopping Bags" className="w-[800px] h-[800px] md:w-[800px] md:h-[800px] lg:w-[900px] lg:h-[900px] xl:w-[900px] xl:h-[900px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300" />
              {/* Subtle glow effect behind the avatar */}
              <div className="absolute inset-0 bg-gradient-to-r from-dcl-purple/20 to-dcl-lavender/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Hero;
