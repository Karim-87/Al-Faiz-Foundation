function Courses() {
    return (
      <main className="bg-yellow-500 min-h-screen p-4 flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Education For All
          </h1>
        </div>
  
        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center font-extrabold text-lg sm:text-xl md:text-2xl w-full max-w-6xl">
          {/* Row 1 */}
          <div className="bg-lime-300 p-4 shadow-lg shadow-white drop-shadow-2xl">
            <a href="#">
              <h1>English</h1>
            </a>
          </div>
          <div className="bg-blue-300 p-4 shadow-lg shadow-white drop-shadow-2xl">
            <a href="#">
              <h1>اردو</h1>
            </a>
          </div>
          <div className="bg-red-300 p-4 shadow-lg shadow-white drop-shadow-2xl">
            <a href="#">
              <h1>سنڌي</h1>
            </a>
          </div>
  
          {/* Row 2 */}
          <div className="bg-lime-300 p-4 shadow-lg shadow-white drop-shadow-2xl">
            <a href="#">
              <h1>English Grammar</h1>
            </a>
          </div>
          <div className="bg-blue-300 p-4 shadow-lg shadow-white drop-shadow-2xl">
            <a href="#">
              <h1>Urdu Grammar</h1>
            </a>
          </div>
          <div className="bg-red-300 p-4 shadow-lg shadow-white drop-shadow-2xl">
            <a href="#">
              <h1>Sindhi Grammar</h1>
            </a>
          </div>
  
          {/* Row 3 */}
          <div className="bg-lime-300 p-4 shadow-lg shadow-white drop-shadow-2xl">
            <a href="#">
              <h1>English Vocabulary</h1>
            </a>
          </div>
          <div className="bg-blue-300 p-4 shadow-lg shadow-white drop-shadow-2xl">
            <a href="#">
              <h1>Urdu Vocabulary</h1>
            </a>
          </div>
          <div className="bg-red-300 p-4 shadow-lg shadow-white drop-shadow-2xl">
            <a href="#">
              <h1>Sindhi Vocabulary</h1>
            </a>
          </div>
  
          {/* Row 4 */}
          <div className="bg-lime-300 p-4 shadow-lg shadow-white drop-shadow-2xl">
            <a href="#">
              <h1>General Knowledge</h1>
            </a>
          </div>
          <div className="bg-blue-300 p-4 shadow-lg shadow-white drop-shadow-2xl">
            <a href="#">
              <h1>عام معلومات</h1>
            </a>
          </div>
          <div className="bg-red-300 p-4 shadow-lg shadow-white drop-shadow-2xl">
            <a href="#">
              <h1>جنرل نالج</h1>
            </a>
          </div>
        </div>
      </main>
    );
  }
  
  export default Courses;
  