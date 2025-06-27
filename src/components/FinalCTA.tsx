import { JumpIn } from 'decentraland-ui2';
import { useCallback } from "react";

interface FinalCTAProps {
  onTrack: (eventName: string, properties?: Record<string, any>) => void;
}

const FinalCTA = ({ onTrack }: FinalCTAProps) => {
  const handleTrack = useCallback((data: Record<string, unknown>) => {
    onTrack('JumpIn Clicked', {
      button_location: 'final_cta',
      button_text: 'START EARNING',
      ...data
    });
  }, [onTrack]);

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <div className="space-y-8 md:space-y-12">
          <div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 md:mb-8 px-4 drop-shadow-2xl">
              Ready to Level Up Your Avatar?
            </h2>
            
            <p className="text-lg md:text-2xl lg:text-3xl text-white/90 mb-0 max-w-4xl mx-auto leading-relaxed px-4 drop-shadow-lg font-medium">
              Start earning free Marketplace Credits just by logging in, exploring, and completing simple goals.
              <br /> <br />
              Trade them for community-made Wearables and Emotes to make your avatar your own.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="flex-shrink-0">
              <JumpIn
                variant="button"
                buttonText="START EARNING"
                onTrack={handleTrack}
                buttonProps={{
                  size: "large",
                  style: {
                    padding: '24px 24px',
                    fontSize: '18px',
                    minHeight: '60px'
                  },
                  className: "jumpin-button-large"
                }}
                modalProps={{
                  title: "Download Decentraland",
                  description: "Join the metaverse and start earning Marketplace Credits",
                  buttonLabel: "Download Now"
                }}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <div className="text-3xl md:text-4xl">🎮</div>
              <div className="text-white font-bold text-lg md:text-xl drop-shadow-md">Join the Beta</div>
              <div className="text-white/80 text-base md:text-lg drop-shadow-md">Limited 8-week program</div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-3xl md:text-4xl">🎨</div>
              <div className="text-white font-bold text-lg md:text-xl drop-shadow-md">Support Creators</div>
              <div className="text-white/80 text-base md:text-lg drop-shadow-md">Help designers thrive</div>
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

