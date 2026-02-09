import logo from "../assets/logo.png";
import { Link, NavLink } from 'react-router-dom';

const linkClass =
  "text-sm font-medium hover:text-blue-300 transition-colors";

export default function Navbar() {
  return (
    <nav className="bg-brand-dark text-white sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link to="/" className="flex items-center space-x-2">
          {/* Replace placeholder with your real logo */}
          <img 
            src={logo} 
            alt="IRA Technologies Logo" 
            className="h-10 w-auto"
          />

          <div>
            <div className="text-lg font-semibold tracking-wide">
              IRA Technologies USA
            </div>
            <div className="text-xs text-gray-300">
              Trusted IT Staffing & Consulting
            </div>
          </div>
        </Link>

        <div className="hidden md:flex space-x-8">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}
