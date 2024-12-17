export default function Footer() {
    return (
      <div>
        <footer className="bg-slate-800 py-10 px-6">
          {/* Footer Content */}
          <div className="flex flex-col sm:flex-row sm:justify-around text-white space-y-6 sm:space-y-0">
            {/* My Website Section */}
            <div>
              <a className="hover:text-blue-500 font-bold" href="">
                My Website
              </a>
              <p>
                <a className="hover:text-blue-500" href="">
                  About
                </a>
              </p>
              <p>
                <a className="hover:text-blue-500" href="">
                  Services
                </a>
              </p>
              <p>
                <a className="hover:text-blue-500" href="">
                  Courses
                </a>
              </p>
              <p>
                <a className="hover:text-blue-500" href="">
                  Contact
                </a>
              </p>
            </div>
  
            {/* Staff Members Section */}
            <div>
              <a className="hover:text-blue-500 font-bold" href="">
                Staff Members
              </a>
              <p>
                <a className="hover:text-blue-500" href="">
                  Mr.
                </a>
              </p>
              <p>
                <a className="hover:text-blue-500" href="">
                  Mr.
                </a>
              </p>
              <p>
                <a className="hover:text-blue-500" href="">
                  Mr.
                </a>
              </p>
              <p>
                <a className="hover:text-blue-500" href="">
                  Mr.
                </a>
              </p>
            </div>
  
            {/* Social Links Section */}
            <div>
              <a className="hover:text-blue-500 font-bold" href="">
                Social Links
              </a>
              <p>
                <a className="hover:text-blue-500" href="">
                  Facebook
                </a>
              </p>
              <p>
                <a className="hover:text-blue-500" href="">
                  YouTube
                </a>
              </p>
              <p>
                <a className="hover:text-blue-500" href="">
                  WhatsApp
                </a>
              </p>
              <p>
                <a className="hover:text-blue-500" href="">
                  TikTok
                </a>
              </p>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="text-center text-slate-300 mt-10">
            <h1>
              Website designed by Karim Buksh (Frontend Web Developer) <br />
              Email:{" "}
              <a
                className="hover:text-blue-500 text-white underline"
                href="mailto:karimkbgabol@gmail.com"
              >
                karimkbgabol@gmail.com
              </a>
            </h1>
          </div>
        </footer>
      </div>
    );
  }
  