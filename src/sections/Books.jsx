import { catalog } from "../content.js";
import SectionHead from "../components/SectionHead.jsx";
import BooksMarquee from "../components/BooksMarquee.jsx";

export default function Books() {
  if (!catalog || catalog.length === 0) return null;

  return (
    <section className="section books-section" id="books" aria-labelledby="books-title">
      <div className="container">
        <SectionHead
          label="The Library"
          title="Books from Africa World Books"
          lead={
            <>
              Find more on our website,{" "}
              <a
                href="https://africaworldbooks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ulink"
              >
                africaworldbooks.com
              </a>
              , and at our office in Remera, Kisimenti — Kigali, Rwanda.
            </>
          }
          id="books"
        />
      </div>
      <BooksMarquee covers={catalog} />
    </section>
  );
}
