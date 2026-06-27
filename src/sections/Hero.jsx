import { site, books } from "../content.js";
import SmartImage from "../components/SmartImage.jsx";

export default function Hero() {
  const { event } = site;
  const featured = books.find((b) => b.featured) || books[0];

  // Render the title from content; italicize the closing phrase for a literary flourish.
  const words = event.title.trim().split(" ");
  const tail = words.slice(-2).join(" ");
  const head = words.slice(0, -2).join(" ");

  const meta = [
    { k: "Date", v: event.date },
    { k: "Time", v: event.time },
    { k: "Venue", v: event.venue },
    { k: "City", v: event.city },
  ];

  return (
    <section className="hero" aria-label="Event introduction">
      <div className="container">
        <div className="hero__kicker-row reveal">
          <span className="hero__kicker">{event.kicker}</span>
        </div>

        <div className="hero__grid">
          <div className="hero__intro">
            <h1 className="hero__title reveal">
            {head} <em>{tail}</em>
          </h1>
          <p className="hero__subtitle reveal">{event.subtitle}</p>

          <div className="hero__meta reveal">
            {meta.map((m) => (
              <div className="hero__meta-item" key={m.k}>
                <span className="hero__meta-k">{m.k}</span>
                <span className="hero__meta-v">{m.v}</span>
              </div>
            ))}
          </div>

          <div className="hero__cta reveal">
            <a href="#authors" className="btn btn--solid">Meet the Authors</a>
            <a href="#program" className="btn">The Program</a>
          </div>
        </div>

        <figure className="hero__cover reveal">
          <SmartImage
            src={featured.cover}
            alt={`Cover of ${featured.title} by ${featured.author}`}
            ratio="2 / 3"
            label={featured.title}
          />
          <figcaption className="hero__cover-cap">
            {featured.title}
            <br />
            {featured.author}
          </figcaption>
        </figure>
        </div>
      </div>
    </section>
  );
}
