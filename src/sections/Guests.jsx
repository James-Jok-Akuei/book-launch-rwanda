import { Link } from "react-router-dom";
import { guests } from "../content.js";
import SectionHead from "../components/SectionHead.jsx";

export default function Guests() {
  return (
    <section className="section section--paper-deep" id="guests" aria-labelledby="guests-title">
      <div className="container">
        <SectionHead
          label="In Attendance"
          title="Distinguished Guests & Speakers"
          lead="Community elders, representatives, and honored guests joining the celebration — tap any name to open their page."
          id="guests"
        />

        <div className="guests__grid reveal">
          {guests.map((g) => (
            <Link className="guest" key={g.id} to={`/guests/${g.id}`}>
              <span className="guest__name">{g.name}</span>
              <span className="guest__title">{g.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
