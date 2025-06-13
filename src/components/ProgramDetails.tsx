const ProgramDetails = () => {
  return <section id="details" className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-20 bg-black/20 backdrop-blur-md rounded-3xl p-8 border border-white/20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 px-4 drop-shadow-2xl">Why Jump Into Decentraland</h2>
          
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-20">
          <div className="space-y-6 md:space-y-10">
            <div className="bg-gradient-to-br from-dcl-ruby/50 to-dcl-orange/50 rounded-2xl md:rounded-3xl p-6 md:p-10 border-2 border-dcl-ruby/70 hover:border-dcl-ruby/90 transition-all duration-300 backdrop-blur-md hover:scale-105 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 flex items-center drop-shadow-lg">
                <span className="text-3xl md:text-4xl mr-3 md:mr-4">💰</span>
                What Are They Worth?
              </h3>
              <p className="text-white leading-relaxed text-base md:text-lg drop-shadow-md font-medium">
                Each Marketplace Credit equals <span className="text-dcl-yellow font-bold text-lg md:text-xl bg-black/30 px-2 py-1 rounded">1 MANA</span> in purchasing power. 
                Use them alone or combine with other payment methods for larger purchases.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-dcl-orange/50 to-dcl-yellow/50 rounded-2xl md:rounded-3xl p-6 md:p-10 border-2 border-dcl-orange/70 hover:border-dcl-orange/90 transition-all duration-300 backdrop-blur-md hover:scale-105 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 flex items-center drop-shadow-lg">
                <span className="text-3xl md:text-4xl mr-3 md:mr-4">🎯</span>
                What Can You Buy?
              </h3>
              <p className="text-white leading-relaxed text-base md:text-lg drop-shadow-md font-medium">
                Credits work for primary sales of <span className="text-dcl-yellow font-bold text-lg md:text-xl bg-black/30 px-2 py-1 rounded">Polygon Wearables and Emotes</span> priced 
                at 1 MANA or more. Perfect for customizing your avatar!
              </p>
            </div>
          </div>
          
          <div className="space-y-6 md:space-y-10">
            <div className="bg-gradient-to-br from-dcl-yellow/50 to-dcl-lavender/50 rounded-2xl md:rounded-3xl p-6 md:p-10 border-2 border-dcl-yellow/70 hover:border-dcl-yellow/90 transition-all duration-300 backdrop-blur-md hover:scale-105 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 flex items-center drop-shadow-lg">
                <span className="text-3xl md:text-4xl mr-3 md:mr-4">⏰</span>
                Limited Time Beta
              </h3>
              <p className="text-white leading-relaxed text-base md:text-lg drop-shadow-md font-medium">
                This is an <span className="text-dcl-ruby font-bold text-lg md:text-xl bg-black/30 px-2 py-1 rounded">8-week beta program</span> running until July 13. 
                Credits expire 2 weeks after the beta ends, so use them while you can!
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-dcl-lavender/50 to-dcl-purple/50 rounded-2xl md:rounded-3xl p-6 md:p-10 border-2 border-dcl-lavender/70 hover:border-dcl-lavender/90 transition-all duration-300 backdrop-blur-md hover:scale-105 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 flex items-center drop-shadow-lg">
                <span className="text-3xl md:text-4xl mr-3 md:mr-4">🎮</span>
                How to Earn
              </h3>
              <p className="text-white leading-relaxed text-base md:text-lg drop-shadow-md font-medium">
                Complete simple weekly goals like <span className="text-dcl-yellow font-bold text-lg md:text-xl bg-black/30 px-2 py-1 rounded">logging in and attending events</span>. 
                No grinding required—just show up and have fun!
              </p>
            </div>
          </div>
        </div>
        
        
      </div>
    </section>;
};
export default ProgramDetails;