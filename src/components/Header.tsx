const Header = () => {
  return (
    <header className="p-4 md:p-6 md:px-[65px] rounded-md md:py-[19px]">
      <div className="flex items-center py-2 md:py-4">
        <img 
          alt="Decentraland Logo" 
          className="max-w-32 w-32 md:max-w-44 md:w-44 hover:min-h-16 scale-110 duration-300 drop-shadow-lg object-scale-down" 
          src="/lovable-uploads/f5534c74-8c58-46c8-a496-68a2fa975c84.png" 
        />
      </div>
    </header>
  );
};

export default Header;
