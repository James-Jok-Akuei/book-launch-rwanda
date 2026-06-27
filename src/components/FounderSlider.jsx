import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import SmartImage from "./SmartImage.jsx";

// Fisher–Yates shuffle — returns a new randomly-ordered copy.
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Auto-advancing carousel. Photos are shuffled into a random order each load.
// Shows dots for small sets and arrows + a counter for large galleries.
// Pauses on hover/focus and respects prefers-reduced-motion.
export default function FounderSlider({ images = [], name = "" }) {
  // Shuffle once per mount so the gallery order is random (and fresh each visit).
  const slides = useMemo(() => shuffle(images), [images]);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;
  const reduceRef = useRef(false);
  const many = count > 10;

  useEffect(() => {
    reduceRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const go = useCallback(
    (dir) => setIndex((p) => (p + dir + count) % count),
    [count]
  );

  useEffect(() => {
    if (count <= 1 || paused || reduceRef.current) return;
    const t = setInterval(() => setIndex((p) => (p + 1) % count), 2200);
    return () => clearInterval(t);
  }, [count, paused]);

  if (!count) return null;

  // Only mount the current slide and its neighbours so a big gallery stays light.
  const near = (i) => Math.abs(i - index) <= 1 || Math.abs(i - index) >= count - 1;

  return (
    <div
      className="fslider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label={`Photographs of ${name}`}
    >
      <div className="fslider__stage">
        {slides.map((src, i) => (
          <div
            className={`fslider__slide${i === index ? " is-active" : ""}`}
            key={i}
            aria-hidden={i !== index}
          >
            {near(i) ? (
              <SmartImage src={src} alt={`${name} — photo ${i + 1}`} ratio="4 / 5" label={name} />
            ) : (
              <div className="fslider__ph" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            className="fslider__arrow fslider__arrow--prev"
            aria-label="Previous photo"
            onClick={() => go(-1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button
            type="button"
            className="fslider__arrow fslider__arrow--next"
            aria-label="Next photo"
            onClick={() => go(1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>

          {many ? (
            <div className="fslider__counter" aria-live="polite">
              {index + 1} / {count}
            </div>
          ) : (
            <div className="fslider__dots" role="tablist">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={i === index ? "is-active" : ""}
                  aria-label={`Show photo ${i + 1} of ${count}`}
                  aria-selected={i === index}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
