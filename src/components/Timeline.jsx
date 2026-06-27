import { program } from "../content.js";

// Renders the program in chronological order, inserting a small group label
// whenever the day moves into a new part (Opening, Cultural Performances, …).
export default function Timeline({ reveal = true, limit = 0 }) {
  const items = limit > 0 ? program.slice(0, limit) : program;
  const rows = [];
  let lastSection = null;

  items.forEach((item, i) => {
    if (item.section && item.section !== lastSection) {
      rows.push({ type: "group", label: item.section, key: `g-${i}` });
      lastSection = item.section;
    }
    rows.push({ type: "item", item, key: `i-${i}` });
  });

  return (
    <div className="timeline">
      {rows.map((row) =>
        row.type === "group" ? (
          <div className="timeline__group-label" key={row.key}>
            {row.label}
          </div>
        ) : (
          <div className={`tl-item${reveal ? " reveal" : ""}`} key={row.key}>
            <div className="tl-item__time">{row.item.time}</div>
            <div>
              <div className="tl-item__title">{row.item.title}</div>
              {row.item.detail && (
                <div className="tl-item__detail">{row.item.detail}</div>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
}
