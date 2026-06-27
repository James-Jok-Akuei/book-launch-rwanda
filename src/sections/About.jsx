import { about } from "../content.js";
import { stripPlaceholder } from "../utils.js";
import SectionHead from "../components/SectionHead.jsx";
import FounderSlider from "../components/FounderSlider.jsx";

export default function About() {
  const ceo = about.ceo;

  return (
    <section className="section section--paper-deep" id="about" aria-labelledby="about-title">
      <div className="container">
        <SectionHead label="The Publisher" title={about.heading} id="about" />

        <div className="about__grid">
          <p className="about__mission reveal">{about.mission}</p>

          <div className="about__body reveal">
            {about.intro.map((para, i) => (
              <p key={i} className={i === 0 ? "dropcap" : ""}>
                {para}
              </p>
            ))}

            <div className="about__community">
              <div className="about__community-name">{about.community.name}</div>
              <div className="about__community-motto">{about.community.motto}</div>
            </div>
          </div>
        </div>

        {ceo && (
          <div className="about__founder reveal">
            <div className="about__founder-media">
              <FounderSlider images={ceo.images} name={ceo.name} />
            </div>
            <div className="about__founder-text">
              <span className="label">The CEO</span>
              <h3 className="about__founder-name">{ceo.name}</h3>
              <div className="about__founder-role">{ceo.title}</div>
              <p className="about__founder-bio">{stripPlaceholder(ceo.bio)}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
