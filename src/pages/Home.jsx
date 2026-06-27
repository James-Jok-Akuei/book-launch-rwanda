import { useReveal } from "../hooks/useReveal.js";
import Hero from "../sections/Hero.jsx";
import Poster from "../sections/Poster.jsx";
import About from "../sections/About.jsx";
import Books from "../sections/Books.jsx";
import Authors from "../sections/Authors.jsx";
import Program from "../sections/Program.jsx";
import Guests from "../sections/Guests.jsx";
import Cultural from "../sections/Cultural.jsx";
import Closing from "../sections/Closing.jsx";

export default function Home() {
  useReveal([]);

  return (
    <>
      <Hero />
      <Poster />
      <About />
      <Books />
      <Authors />
      <Guests />
      <Program />
      <Cultural />
      <Closing />
    </>
  );
}
