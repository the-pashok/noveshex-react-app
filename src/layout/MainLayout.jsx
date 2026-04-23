import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Container } from '../components/Container';
import { footerLinks, legalLinks, mainNavLinks } from '../data/siteData';

function isHashLink(href) {
  return href.startsWith('/#');
}

export function MainLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal:not(.is-visible)');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <header className="site-header">
        <Container className="site-header__inner">
          <Link className="site-logo" to="/">
            Noveshex
          </Link>

          <nav className={`site-nav ${isMenuOpen ? 'site-nav--open' : ''}`}>
            {mainNavLinks.map((link) =>
              isHashLink(link.href) ? (
                <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              ) : (
                <NavLink key={link.href} to={link.href} onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          <button
            type="button"
            className="menu-toggle"
            aria-label="Відкрити меню"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span />
            <span />
          </button>
        </Container>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <Container className="site-footer__inner">
          <div>
            <span className="site-footer__brand">Noveshex</span>
            <p className="site-footer__copy">
              Dark-first redesign concept in React with reusable components, training-program pages and production-ready structure.
            </p>
          </div>

          <div>
            <h3>Навігація</h3>
            <div className="site-footer__links">
              {footerLinks.map((link) =>
                isHashLink(link.to) ? (
                  <a key={link.to} href={link.to}>
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.to} to={link.to}>
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>

          <div>
            <h3>Документи</h3>
            <div className="site-footer__links">
              {legalLinks.map((link) => (
                <Link key={link.to} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
