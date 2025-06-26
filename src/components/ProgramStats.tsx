
const ProgramStats = () => {
  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-gradient-to-br from-dcl-ruby/40 to-dcl-orange/40 backdrop-blur-md rounded-2xl p-6 md:p-8 border-2 border-dcl-ruby/60 hover:border-dcl-ruby/80 transition-all duration-300 hover:scale-105 shadow-xl text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-3 drop-shadow-lg">8</div>
            <div className="text-white text-base md:text-lg lg:text-xl drop-shadow-md font-medium">Credits per week</div>
          </div>
          <div className="bg-gradient-to-br from-dcl-orange/40 to-dcl-yellow/40 backdrop-blur-md rounded-2xl p-6 md:p-8 border-2 border-dcl-orange/60 hover:border-dcl-orange/80 transition-all duration-300 hover:scale-105 shadow-xl text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-3 drop-shadow-lg">Time-Limited</div>
            <div className="text-white text-base md:text-lg lg:text-xl drop-shadow-md font-medium">Don’t miss this week’s goals</div>
          </div>
          <div className="bg-gradient-to-br from-dcl-yellow/40 to-dcl-lavender/40 backdrop-blur-md rounded-2xl p-6 md:p-8 border-2 border-dcl-yellow/60 hover:border-dcl-yellow/80 transition-all duration-300 hover:scale-105 shadow-xl text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-3 drop-shadow-lg">FREE</div>
            <div className="text-white text-base md:text-lg lg:text-xl drop-shadow-md font-medium">Wearables & Emotes</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramStats;
