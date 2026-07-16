function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-slate-900 shadow-md z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          Arpit Gupta
        </h1>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8 text-gray-700 dark:text-gray-300">

          <li>
            <a href="#home" className="hover:text-blue-600 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-blue-600 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-600 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;