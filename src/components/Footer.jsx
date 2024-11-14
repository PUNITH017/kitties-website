import "../index.css";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* About Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">About Us</h3>
            <p className="text-gray-400">
              We are passionate about CATS
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul>
              <li>
                <a href="#home" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <ul className="text-gray-400">
              <li>Email: info@catwebsite.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Cat Street, Feline City</li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-8 space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 mt-8">
          © 2024 CatWebsite. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
