import { Link } from "react-router-dom";
import { site } from "../content.js";
import { useReveal } from "../hooks/useReveal.js";
import Timeline from "../components/Timeline.jsx";

export default function ProgramPage() {
  useReveal([]);

  return (
    <article className="program-page">
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container measure-wide">
          <Link to="/" className="detail__back ulink">
            ← Back to home
          </Link>

          <span className="label reveal">{site.event.date}</span>
          <h1 className="section__title reveal" style={{ marginTop: "0.6rem" }}>
            Program of Events
          </h1>
          <p className="section__lead reveal">
            {site.event.venue} · {site.event.city}
          </p>

          <div style={{ marginTop: "2.5rem" }}>
            <Timeline />
          </div>
        </div>
      </section>
    </article>
  );
}
