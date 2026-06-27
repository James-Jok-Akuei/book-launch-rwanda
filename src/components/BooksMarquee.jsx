// Modern, continuously sliding shelf of book covers.
// Each cover keeps its natural proportions (no cropped titles); the set is
// duplicated so the horizontal loop is seamless. Pauses on hover.
export default function BooksMarquee({ covers = [] }) {
  if (!covers.length) return null;

  const loop = [...covers, ...covers];
  // Scroll speed scales with the number of covers (~4s per cover) so the shelf
  // glides at a calm, constant pace no matter how many books are added.
  const duration = Math.max(40, covers.length * 4);

  return (
    <div className="bmarquee" aria-label="Books from Africa World Books">
      <div className="bmarquee__track" style={{ animationDuration: `${duration}s` }}>
        {loop.map((src, i) => (
          <div className="bmarquee__item" key={i} aria-hidden={i >= covers.length}>
            <img
              src={src}
              alt={i < covers.length ? "Africa World Books title" : ""}
              loading="lazy"
              decoding="async"
              onError={(e) =>
                (e.currentTarget.closest(".bmarquee__item").style.display = "none")
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
