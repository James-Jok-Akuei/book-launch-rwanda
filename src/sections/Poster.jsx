import { site, catalog } from "../content.js";
import BooksMarquee from "../components/BooksMarquee.jsx";

export default function Poster() {
  if (!site.event.poster) return null;

  return (
    <section className="poster-section" id="poster" aria-label="Official launch poster">
      {catalog && catalog.length > 0 && (
        <div className="poster-bg" aria-hidden="true">
          <BooksMarquee covers={catalog} />
        </div>
      )}

      <div className="container">
        <figure className="poster-feature reveal">
          <img
            src={site.event.poster}
            alt={`Official poster for ${site.event.title} — ${site.event.venue}, ${site.event.city}`}
            loading="lazy"
            onError={(e) => (e.currentTarget.closest(".poster-section").style.display = "none")}
          />
          <figcaption className="poster-feature__cap">
            <span className="label">The Invitation</span>
            <span>
              {site.event.venue} · {site.event.city} · {site.event.date}
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
