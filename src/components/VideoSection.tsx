import { useRef, useEffect, useState } from 'react';
import BigDownloadButton from './BigDownloadButton';
import { useCallback } from "react";

interface VideoSectionProps {
  onTrack?: (eventName: string, properties?: Record<string, any>) => void;
}

const VideoSection = ({ onTrack }: VideoSectionProps) => {
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

  const handleClickDownload = useCallback((event: React.MouseEvent<HTMLButtonElement>, trackingData: any) => {
    if (onTrack) {
      onTrack('Download Button Clicked', {
        button_location: 'video_section',
        button_text: 'Download Decentraland',
        download_type: trackingData?.type || 'default',
        download_url: trackingData?.url || 'https://decentraland.org/download',
        track_uuid: trackingData?.track_uuid || `download-${Date.now()}`
      });
    }
  }, [onTrack]);

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
          <BigDownloadButton
            onClick={handleClickDownload}
            label="Download Decentraland"
            trackingId="video-section-download"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
