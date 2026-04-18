import logo from "../../assets/logo.png";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../ui/Icon/icon";
import { useLocation } from "react-router-dom";
import ResumePDF from "../../assets/Prashil-UX-Resume.pdf";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [tempActive, setTempActive] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
  ];

  const handleNavClick = (href) => {
    setTempActive(href);

    // ✅ change URL like resume (without reload)
    navigate(href);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setActive(null), 10500);
  };

  return (
    <header className="w-full bg-white mb-[4px] sticky top-0 z-50">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* LOGO */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="shrink-0"
        >
          <img src={logo} alt="Logo" className="h-10 w-auto sm:h-9" />
        </button>

        {/* LINKS */}
        <div className="flex flex-1 justify-center">
          <ul className="flex items-center gap-5 text-[12px] font-medium font-body text-neutral-500 sm:gap-8 sm:text-sm">
           {navLinks.map((l) => {
  const isActive = location.pathname === l.href;

  return (
    <li key={l.href}>
      <button
        type="button"
        onClick={() => navigate(l.href)}
        className={`group relative px-1 py-1 transition-all duration-200
        ${
          isActive
            ? "text-black -translate-y-0.5"
            : "text-neutral-500 hover:text-black hover:-translate-y-0.5"
        }`}
      >
        {l.label}

        {/* DOT */}
        <span
          className={`absolute left-1/2 -translate-x-1/2 -bottom-2 h-1 w-1 rounded-full bg-black transition-all duration-200
          ${
            isActive
              ? "opacity-100 scale-100"
              : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
          }`}
        />
      </button>
    </li>
  );
})}
          </ul>
        </div>

        {/* RESUME */}
       <div className="shrink-0">
  <a
    href={ResumePDF}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex h-9 items-center justify-center rounded-full bg-black px-3 text-white sm:h-10 sm:px-4"
  >
    <Icon name="nots" className="h-5 w-5 text-white" />
    <span className="hidden sm:inline ml-2 text-sm font-medium font-body">
      Resume
    </span>
  </a>
</div>
      </nav>
    </header>
  );
}
