
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-dcl-ruby/20">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/58341ed4-a73f-4046-a98d-3a273a096a74.png" 
            alt="Decentraland Logo" 
            className="w-12 h-12 md:w-16 md:h-16 hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open('https://decentraland.org', '_blank')}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
