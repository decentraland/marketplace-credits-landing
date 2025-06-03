
const ProgramDetails = () => {
  return (
    <section id="details" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How Marketplace Credits Work
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A new rewards system designed to acknowledge community engagement and help you personalize your avatar
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">💰 What Are They Worth?</h3>
              <p className="text-gray-300 leading-relaxed">
                Each Marketplace Credit equals <span className="text-cyan-400 font-semibold">1 MANA</span> in purchasing power. 
                Use them alone or combine with other payment methods for larger purchases.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-900/50 to-purple-900/50 rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">🎯 What Can You Buy?</h3>
              <p className="text-gray-300 leading-relaxed">
                Credits work for primary sales of <span className="text-purple-400 font-semibold">Polygon Wearables and Emotes</span> priced 
                at 1 MANA or more. Perfect for customizing your avatar!
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 rounded-2xl p-8 border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">⏰ Limited Time Beta</h3>
              <p className="text-gray-300 leading-relaxed">
                This is an <span className="text-pink-400 font-semibold">8-week beta program</span> running until July 13. 
                Credits expire 2 weeks after the beta ends, so use them while you can!
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">🎮 How to Earn</h3>
              <p className="text-gray-300 leading-relaxed">
                Complete simple weekly goals like <span className="text-cyan-400 font-semibold">logging in and attending events</span>. 
                No grinding required—just show up and have fun!
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 border border-white/10 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Why This Matters</h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Decentraland is all about <span className="text-purple-400 font-semibold">expression, connection, and creativity</span>. 
            Marketplace Credits lower the barrier to participating in that world—giving every user a little more to play with. 
            It's about showing up, having fun, and getting rewarded with pocket money to try new things.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;
