import { site } from "../content.js";

export default function Footer() {
  const year = "2026";
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={site.logo} alt="" onError={(e) => (e.currentTarget.style.display = "none")} />
          <div>
            <div className="footer__brand-name">{site.publisher}</div>
            <div className="footer__brand-tag">{site.publisherTagline}</div>
          </div>
        </div>
        <div className="footer__meta">
          <div>{site.event.venue} · {site.event.city}</div>
          <div>{site.event.date}</div>
          <div>© {year} {site.publisher}</div>
        </div>
      </div>

      {site.credit && (
        <div className="container footer__credit">
          Built by {site.credit.builtBy} ·{" "}
          <a href={`mailto:${site.credit.email}`}>{site.credit.email}</a>
          {site.credit.website && (
            <>
              {" · "}
              <a
                href={`https://${site.credit.website}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.credit.website}
              </a>
            </>
          )}
        </div>
      )}
    </footer>
  );
}
