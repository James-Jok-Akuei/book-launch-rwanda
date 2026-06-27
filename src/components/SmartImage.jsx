import { useState } from "react";

// Lazy image with a typographic fallback when the asset isn't present yet
// (author portraits and the real book cover may still be PLACEHOLDER files).
export default function SmartImage({ src, alt, className, ratio, label }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`smartimg-fallback ${className || ""}`}
        role="img"
        aria-label={alt}
        style={{ aspectRatio: ratio || "2 / 3" }}
      >
        <span>{label || initials(alt)}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

function initials(text = "") {
  return text
    .replace(/[^A-Za-z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}
