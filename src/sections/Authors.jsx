import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { authors, books } from "../content.js";
import SectionHead from "../components/SectionHead.jsx";
import SmartImage from "../components/SmartImage.jsx";

const STAR =
  "M12 2l2.9 6.26L21.6 9l-5 4.6 1.4 6.9L12 17.3 6 20.5l1.4-6.9-5-4.6 6.7-.74L12 2z";

// Shows the author spreads one at a time, auto-advancing on an interval.
export default function Authors() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceRef = useRef(false);
  const count = authors.length;

  // The author whose book is the launch centerpiece (derived from the featured book).
  const featuredBook = books.find((b) => b.featured);
  const launchAuthorId = featuredBook?.authorId;

  useEffect(() => {
    reduceRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (paused || reduceRef.current || count <= 1) return;
    const t = setInterval(() => setIndex((p) => (p + 1) % count), 7000);
    return () => clearInterval(t);
  }, [paused, count]);

  const a = authors[index];
  const flip = index % 2 === 1; // keep the alternating portrait/bio layout
  const isLaunch = a.id === launchAuthorId;

  return (
    <section
      className="section section--paper-deep"
      id="authors"
      aria-labelledby="authors-title"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="container">
        <SectionHead
          label="The Writers"
          title="The Authors"
          lead="Scholars and storytellers whose work preserves and reimagines the South Sudanese experience."
          id="authors"
        />

        <div className="authors-rotator">
          {/* key forces a remount so each author fades in as it appears */}
          <article
            className={`author-spread${flip ? " author-spread--flip" : ""}${
              isLaunch ? " is-launch" : ""
            }`}
            key={a.id}
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${count}: ${a.name}`}
          >
            <figure className="author-spread__portrait">
              {isLaunch && (
                <span className="author-spread__ribbon">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d={STAR} /></svg>
                  Today's Launch
                </span>
              )}
              <SmartImage
                src={a.photo}
                alt={`Portrait of ${a.name}`}
                ratio="4 / 5"
                label={a.name}
              />
            </figure>

            <div className="author-spread__body">
              {isLaunch && featuredBook && (
                <div className="author-spread__badge">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d={STAR} /></svg>
                  Author of today's centerpiece — <em>{featuredBook.title}</em>
                </div>
              )}
              <div className="author-spread__num">
                {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
              </div>
              <h3 className="author-spread__name">{a.name}</h3>
              <div className="author-spread__role">{a.role}</div>
              <p className="author-spread__short">{a.short}</p>
              <div className="author-spread__more">
                <Link to={`/authors/${a.id}`} className="btn">
                  Read full biography
                </Link>
              </div>
            </div>
          </article>

          <div className="authors-rotator__dots" role="tablist" aria-label="Choose an author">
            {authors.map((au, i) => (
              <button
                key={au.id}
                type="button"
                className={`${i === index ? "is-active" : ""}${
                  au.id === launchAuthorId ? " is-launch" : ""
                }`}
                aria-label={au.id === launchAuthorId ? `${au.name} (today's launch)` : au.name}
                aria-selected={i === index}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
