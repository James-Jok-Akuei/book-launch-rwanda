import { culturalGroups } from "../content.js";
import SectionHead from "../components/SectionHead.jsx";

export default function Cultural() {
  return (
    <section className="section cultural" id="cultural" aria-labelledby="cultural-title">
      <div className="container">
        <SectionHead
          label="A Celebration of Heritage"
          title="Cultural Performances"
          id="cultural"
        />
        <p className="section__lead reveal" style={{ margin: "0 auto" }}>
          Throughout the afternoon, dancers and singers from across South Sudan
          bring the day to life.
        </p>

        <div className="cultural__list reveal">
          {culturalGroups.map((group) => (
            <span className="cultural__item" key={group}>
              {group}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
