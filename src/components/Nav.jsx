import { useEffect, useState, useCallback } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { site } from "../content.js";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "books", label: "Books" },
  { id: "authors", label: "Authors" },
  { id: "guests", label: "Guests" },
  { id: "program", label: "Program" },
  { id: "cultural", label: "Cultural" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy — only on the home page where the sections exist.
  useEffect(() => {
    if (!onHome) {
      setActive("");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [onHome]);

  const go = useCallback(
    (e, id) => {
      e.preventDefault();
      setOpen(false);
      if (onHome) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, "", `#${id}`);
      } else {
        navigate(`/#${id}`);
      }
    },
    [onHome, navigate]
  );

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
      <nav className="nav__inner" aria-label="Primary">
        <Link
          to="/"
          className="nav__brand"
          aria-label={`${site.publisher} — back to top`}
          onClick={(e) => {
            setOpen(false);
            if (onHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              history.replaceState(null, "", "/");
            }
          }}
        >
          <img src={site.logo} alt={`${site.publisher} logo`} width="40" height="40" onError={(e) => (e.currentTarget.style.display = "none")} />
          <span className="nav__wordmark">
            {site.publisher}
            <span>Independent Publisher</span>
          </span>
        </Link>

        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>

        <div className={`nav__links${open ? " is-open" : ""}`}>
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`/#${id}`}
              className={`nav__link${active === id ? " is-active" : ""}`}
              onClick={(e) => go(e, id)}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
