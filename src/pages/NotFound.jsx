import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="notfound container">
      <span className="label" style={{ justifyContent: "center" }}>
        Page not found
      </span>
      <h1>404</h1>
      <p className="measure" style={{ margin: "0 auto" }}>
        The page you're looking for has wandered off the shelf.
      </p>
      <p>
        <Link to="/" className="btn">
          Return home
        </Link>
      </p>
    </section>
  );
}
