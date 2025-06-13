
import { useRef, useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const VideoSection = () => {
  const videoRef = useRef<HTMLIFrameElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Video must be fully visible to start playing
      if (entry.isIntersecting && entry.intersectionRatio >= 1.0) {
        setIsInView(true);
      } else {
        // Pause when video goes out of full view
        setIsInView(false);
      }
    }, {
      threshold: 1.0,
      // Video must be 100% visible to trigger
      rootMargin: '0px'
    });

    const videoElement = videoRef.current;
    if (videoElement) {
      observer.observe(videoElement.parentElement || videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement.parentElement || videoElement);
      }
    };
  }, []);

  // Update the iframe src to include autoplay when in view, pause when out of view
  const videoSrc = isInView ? "https://www.youtube.com/embed/ZVHMPBWea8I?autoplay=1&mute=1" : "https://www.youtube.com/embed/ZVHMPBWea8I?autoplay=0";

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-2xl">How Marketplace Credits Work</h2>
        </div>
        
        <div className="relative w-full" style={{
          paddingBottom: '56.25%' /* 16:9 aspect ratio */
        }}>
          <iframe 
            ref={videoRef} 
            className="absolute top-0 left-0 w-full h-full rounded-xl md:rounded-2xl shadow-2xl" 
            src={videoSrc} 
            title="Marketplace Credits Video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen 
          />
        </div>

        <div className="flex justify-center mt-8 md:mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-dcl-ruby to-dcl-orange hover:from-dcl-ruby/90 hover:to-dcl-orange/90 text-white px-6 md:px-10 py-6 md:py-8 text-lg md:text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border-2 border-white/30 drop-shadow-lg" 
            onClick={() => window.open('https://decentraland.org/download', '_blank')}
          >
            <Download className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
            Download Decentraland
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
