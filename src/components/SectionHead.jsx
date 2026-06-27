export default function SectionHead({ label, title, lead, id }) {
  return (
    <div className="section__head reveal">
      {label && <span className="label">{label}</span>}
      {title && (
        <h2 className="section__title" id={id ? `${id}-title` : undefined}>
          {title}
        </h2>
      )}
      {lead && <p className="section__lead">{lead}</p>}
    </div>
  );
}
