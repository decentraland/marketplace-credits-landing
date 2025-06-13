

const ProgramDetails = () => {
  return <section id="details" className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-20 bg-black/20 backdrop-blur-md rounded-3xl p-8 border border-white/20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 px-4 drop-shadow-2xl">Why Jump Into Decentraland</h2>
          
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-20">
          <div className="space-y-6 md:space-y-10">
            <div className="bg-gradient-to-br from-dcl-ruby/50 to-dcl-orange/50 rounded-2xl md:rounded-3xl p-6 md:p-10 border-2 border-dcl-ruby/70 hover:border-dcl-ruby/90 transition-all duration-300 backdrop-blur-md hover:scale-105 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 text-center drop-shadow-lg">
                Build Your Digital Identity
              </h3>
              <p className="text-white leading-relaxed text-base md:text-lg drop-shadow-md font-medium">
                Dress up your avatar, collect new looks, and express yourself however you want.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-dcl-yellow/50 to-dcl-lavender/50 rounded-2xl md:rounded-3xl p-6 md:p-10 border-2 border-dcl-yellow/70 hover:border-dcl-yellow/90 transition-all duration-300 backdrop-blur-md hover:scale-105 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 text-center drop-shadow-lg">
                Step Into Something Bigger
              </h3>
              <p className="text-white leading-relaxed text-base md:text-lg drop-shadow-md font-medium">
                Explore a 3D world built by people from all over the globe.
              </p>
            </div>
          </div>
          
          <div className="space-y-6 md:space-y-10">
            <div className="bg-gradient-to-br from-dcl-orange/50 to-dcl-yellow/50 rounded-2xl md:rounded-3xl p-6 md:p-10 border-2 border-dcl-orange/70 hover:border-dcl-orange/90 transition-all duration-300 backdrop-blur-md hover:scale-105 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 text-center drop-shadow-lg">
                Play Your Way
              </h3>
              <p className="text-white leading-relaxed text-base md:text-lg drop-shadow-md font-medium">
                Jump into social events, parties, and mini-games—no grinding or pressure.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-dcl-lavender/50 to-dcl-purple/50 rounded-2xl md:rounded-3xl p-6 md:p-10 border-2 border-dcl-lavender/70 hover:border-dcl-lavender/90 transition-all duration-300 backdrop-blur-md hover:scale-105 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 text-center drop-shadow-lg">
                Own your experience
              </h3>
              <p className="text-white leading-relaxed text-base md:text-lg drop-shadow-md font-medium">
                It's fun, surprising, and always evolving—because it's shaped by the people in it.
              </p>
            </div>
          </div>
        </div>
        
        
      </div>
    </section>;
};
export default ProgramDetails;

