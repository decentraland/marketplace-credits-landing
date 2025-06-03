
const ProgramDetails = () => {
  return (
    <section id="details" className="py-24 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=1920&h=1080')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-dcl-white mb-8">
            How Marketplace Credits Work
          </h2>
          <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            A new rewards system designed to acknowledge community engagement and help you personalize your avatar
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-10">
            <div className="bg-gradient-to-br from-dcl-ruby/30 to-dcl-orange/30 rounded-3xl p-10 border border-dcl-ruby/40 hover:border-dcl-ruby/60 transition-all duration-300 backdrop-blur-md hover:scale-105">
              <h3 className="text-3xl font-bold text-dcl-white mb-6 flex items-center">
                <span className="text-4xl mr-4">💰</span>
                What Are They Worth?
              </h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                Each Marketplace Credit equals <span className="text-dcl-ruby font-bold text-xl">1 MANA</span> in purchasing power. 
                Use them alone or combine with other payment methods for larger purchases.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-dcl-orange/30 to-dcl-yellow/30 rounded-3xl p-10 border border-dcl-orange/40 hover:border-dcl-orange/60 transition-all duration-300 backdrop-blur-md hover:scale-105">
              <h3 className="text-3xl font-bold text-dcl-white mb-6 flex items-center">
                <span className="text-4xl mr-4">🎯</span>
                What Can You Buy?
              </h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                Credits work for primary sales of <span className="text-dcl-orange font-bold text-xl">Polygon Wearables and Emotes</span> priced 
                at 1 MANA or more. Perfect for customizing your avatar!
              </p>
            </div>
          </div>
          
          <div className="space-y-10">
            <div className="bg-gradient-to-br from-dcl-yellow/30 to-dcl-lavender/30 rounded-3xl p-10 border border-dcl-yellow/40 hover:border-dcl-yellow/60 transition-all duration-300 backdrop-blur-md hover:scale-105">
              <h3 className="text-3xl font-bold text-dcl-white mb-6 flex items-center">
                <span className="text-4xl mr-4">⏰</span>
                Limited Time Beta
              </h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                This is an <span className="text-dcl-yellow font-bold text-xl">8-week beta program</span> running until July 13. 
                Credits expire 2 weeks after the beta ends, so use them while you can!
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-dcl-lavender/30 to-dcl-purple/30 rounded-3xl p-10 border border-dcl-lavender/40 hover:border-dcl-lavender/60 transition-all duration-300 backdrop-blur-md hover:scale-105">
              <h3 className="text-3xl font-bold text-dcl-white mb-6 flex items-center">
                <span className="text-4xl mr-4">🎮</span>
                How to Earn
              </h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                Complete simple weekly goals like <span className="text-dcl-lavender font-bold text-xl">logging in and attending events</span>. 
                No grinding required—just show up and have fun!
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-dcl-ruby/30 via-dcl-orange/30 to-dcl-yellow/30 rounded-3xl p-12 border border-dcl-ruby/40 text-center backdrop-blur-md">
          <h3 className="text-4xl font-bold text-dcl-white mb-8">Why This Matters</h3>
          <p className="text-2xl text-gray-200 max-w-5xl mx-auto leading-relaxed">
            Decentraland is all about <span className="text-dcl-ruby font-bold">expression, connection, and creativity</span>. 
            Marketplace Credits lower the barrier to participating in that world—giving every user a little more to play with. 
            It's about showing up, having fun, and getting rewarded with pocket money to try new things.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;
