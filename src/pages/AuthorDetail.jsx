import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { authors, books } from "../content.js";
import { useReveal } from "../hooks/useReveal.js";
import SmartImage from "../components/SmartImage.jsx";
import NotFound from "./NotFound.jsx";

export default function AuthorDetail() {
  const { id } = useParams();
  const author = authors.find((a) => a.id === id);
  useReveal([id]);

  useEffect(() => {
    if (author) document.title = `${author.name} — Africa World Books`;
    return () => {
      document.title =
        "The Unsung Heroes of the South Sudanese Struggle for Freedom — Africa World Books";
    };
  }, [author]);

  if (!author) return <NotFound />;

  const authorBooks = books.filter((b) => b.authorId === author.id);

  return (
    <article className="detail container">
      <Link to="/#authors" className="detail__back ulink">
        ← Back to all authors
      </Link>

      <div className="detail__grid">
        <figure className="detail__portrait reveal">
          <SmartImage
            src={author.photo}
            alt={`Portrait of ${author.name}`}
            ratio="4 / 5"
            label={author.name}
          />
        </figure>

        <div>
          <h1 className="detail__name reveal">{author.name}</h1>
          <div className="detail__role reveal">{author.role}</div>

          <div className="detail__bio reveal">
            {author.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {authorBooks.length > 0 && (
            <div className="detail__books reveal">
              <div className="detail__books-label">Featured in this launch</div>
              {authorBooks.map((b) => (
                <div key={b.id}>
                  <span className="detail__book-link">{b.title}</span>
                  {b.subtitle ? <span> — {b.subtitle}</span> : null}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
