import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { guests } from "../content.js";
import NotFound from "./NotFound.jsx";

const STAR =
  "M12 2l2.9 6.26L21.6 9l-5 4.6 1.4 6.9L12 17.3 6 20.5l1.4-6.9-5-4.6 6.7-.74L12 2z";

export default function GuestDetail() {
  const { id } = useParams();
  const guest = guests.find((g) => g.id === id);
  const [photoFailed, setPhotoFailed] = useState(false);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (guest) document.title = `${guest.name} — Africa World Books`;
    return () => {
      document.title =
        "The Unsung Heroes of the South Sudanese Struggle for Freedom — Africa World Books";
    };
  }, [guest]);

  if (!guest) return <NotFound />;

  const showPhoto = Boolean(guest.photo) && !photoFailed;

  return (
    <article className="guest-detail">
      {/* SVG filter that ripples the flag like wind */}
      <svg className="ssflag-defs" aria-hidden="true" focusable="false">
        <filter id="flag-wave" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.006 0.013"
            numOctaves="2"
            seed="7"
            result="noise"
          >
            {!reduce && (
              <animate
                attributeName="baseFrequency"
                dur="16s"
                values="0.006 0.013; 0.012 0.02; 0.008 0.01; 0.006 0.013"
                repeatCount="indefinite"
              />
            )}
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="20"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      {/* South Sudan flag backdrop (waving) */}
      <div className="ssflag" aria-hidden="true">
        <span className="ssflag__triangle" />
        <svg className="ssflag__star" viewBox="0 0 24 24" aria-hidden="true">
          <path d={STAR} />
        </svg>
        <span className="ssflag__folds" />
      </div>
      <div className="guest-detail__scrim" aria-hidden="true" />

      <div className="guest-detail__inner">
        <Link to="/#guests" className="guest-detail__back">
          ← Back to guests
        </Link>

        <div className={`guest-detail__card${showPhoto ? "" : " is-textonly"}`}>
          {showPhoto ? (
            <div className="guest-detail__photo">
              <img
                src={guest.photo}
                alt={`Portrait of ${guest.name}`}
                onError={() => setPhotoFailed(true)}
              />
            </div>
          ) : (
            <svg className="guest-detail__mark" viewBox="0 0 24 24" aria-hidden="true">
              <path d={STAR} />
            </svg>
          )}

          <span className="label">In Attendance</span>
          <h1 className="guest-detail__name">{guest.name}</h1>
          <div className="guest-detail__title">{guest.title}</div>
        </div>
      </div>
    </article>
  );
}
