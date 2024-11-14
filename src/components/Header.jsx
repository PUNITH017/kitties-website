import "../index.css";

export function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold ">
          <a href="/" className="text-white">
            <div className="flex flex-row">
                <div className="h-10 w-10 mr-2">
                <img
                    src="https://cdn-icons-png.flaticon.com/128/9513/9513911.png"
                    alt=""
                />
                </div>
                <div>
                <p>KITTIES</p>
                </div>
            </div>
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-4">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#services" className="hover:text-gray-400">
            Services
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </nav>

        {/* Call to Action Button */}
        <div>
          <a
            href="#get-started"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
