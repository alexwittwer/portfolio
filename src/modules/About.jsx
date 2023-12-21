/* eslint-disable react/no-unescaped-entities */
import { useInView } from "react-intersection-observer";

function About() {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "300px",
  });

  return (
    <>
      <section
        id="About"
        className="text-white flex gap-2 flex-col justify-center items-center h-screen about"
      >
        <h1
          ref={ref}
          className={`text-5xl font-bold ${inView ? "fade-in" : ""}`}
        >
          Hi, I'm Alex
        </h1>
      </section>
    </>
  );
}

export default About;
