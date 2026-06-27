import { contact, site } from "../content.js";
import { isPlaceholder } from "../utils.js";

export default function Closing() {
  const items = [];
  if (!isPlaceholder(contact.email)) {
    items.push(
      <a href={`mailto:${contact.email}`} key="email" className="ulink">
        {contact.email}
      </a>
    );
  }
  if (!isPlaceholder(contact.phone)) {
    items.push(
      <a href={`tel:${contact.phone.replace(/\s/g, "")}`} key="phone" className="ulink">
        {contact.phone}
      </a>
    );
  }

  return (
    <section className="section section--ink closing" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <span className="label reveal" style={{ justifyContent: "center", display: "flex" }}>
          Until the 27th
        </span>
        <h2 className="closing__line reveal" id="contact-title" style={{ marginTop: "1.2rem" }}>
          {contact.closingLine}
        </h2>
        <p className="closing__note reveal">{contact.signingNote}</p>

        <div className="closing__contact reveal">
          <span>{contact.publisher}</span>
          <span>{site.event.venue} · {site.event.city}</span>
          {items}
        </div>
      </div>
    </section>
  );
}
