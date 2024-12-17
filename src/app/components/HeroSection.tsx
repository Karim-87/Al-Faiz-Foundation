function HeroSecton() {
    return (
      <main className="bg-yellow-500 min-h-screen flex flex-col items-center justify-center">
        {/* Welcome Section */}
        <div className="text-center">
          <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight p-2">
            <h1>WELCOME</h1>
          </div>
          <div className="text-base sm:text-lg md:text-xl mt-2">
            <h1>This webpage is under development</h1>
          </div>
        </div>
  
        {/* Language Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 px-4 mt-8 text-center font-extrabold text-lg sm:text-xl md:text-2xl w-full max-w-3xl">
          <div className="flex-1 bg-lime-300 p-4 shadow-lg shadow-white drop-shadow-2xl">
            <a href="#">
              <h1>English</h1>
            </a>
          </div>
          <div className="flex-1 bg-blue-300 p-4 shadow-lg shadow-white drop-shadow-2xl">
            <a href="#">
              <h1>اردو</h1>
            </a>
          </div>
          <div className="flex-1 bg-red-300 p-4 shadow-lg shadow-white drop-shadow-2xl">
            <a href="#">
              <h1>سنڌي</h1>
            </a>
          </div>
        </div>
      </main>
    );
  }
  
  export default HeroSecton;
  