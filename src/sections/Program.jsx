import { Link } from "react-router-dom";
import { site, program } from "../content.js";
import SectionHead from "../components/SectionHead.jsx";
import Timeline from "../components/Timeline.jsx";

const PREVIEW = 12;

export default function Program() {
  const remaining = program.length - PREVIEW;
  return (
    <section className="section" id="program" aria-labelledby="program-title">
      <div className="container">
        <SectionHead
          label="The Day"
          title="Program of Events"
          lead={`A full afternoon of readings, addresses, and cultural performance at ${site.event.venue} — beginning with arrival and running through to the book signing.`}
          id="program"
        />
        <div className="measure-wide">
          <Timeline limit={PREVIEW} />
          <div className="program__more reveal">
            <Link to="/program" className="btn">
              View the full program
              {remaining > 0 ? ` (${remaining} more)` : ""}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
