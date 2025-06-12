import { useRef, useEffect, useState } from 'react';
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
  return <section className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-2xl">How Marketplace Credits Work</h2>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium">
            Watch how Marketplace Credits work and discover all the amazing ways to customize your avatar
          </p>
        </div>
        
        <div className="relative w-full" style={{
        paddingBottom: '56.25%' /* 16:9 aspect ratio */
      }}>
          <iframe ref={videoRef} className="absolute top-0 left-0 w-full h-full rounded-xl md:rounded-2xl shadow-2xl" src={videoSrc} title="Marketplace Credits Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
      </div>
    </section>;
};
export default VideoSection;