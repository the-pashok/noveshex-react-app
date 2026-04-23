import { NavLink } from 'react-router-dom';
import { legalLinks } from '../data/siteData';

export function LegalSidebar() {
  return (
    <aside className="legal-sidebar">
      <span className="legal-sidebar__eyebrow">Legal</span>
      <nav>
        {legalLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `legal-sidebar__link ${isActive ? 'legal-sidebar__link--active' : ''}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
