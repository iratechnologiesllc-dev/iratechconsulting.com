import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="IRA Technologies" className="h-10" />
        </div>

        <nav className="flex gap-6 font-medium">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/services" className="hover:text-primary">Services</Link>
          <Link to="/contact" className="bg-primary text-white px-4 py-2 rounded">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  )
}