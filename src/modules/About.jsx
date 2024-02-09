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
        className="bio text-white flex flex-col justify-center items-center h-screen about"
      >
        <div className="inline-block">
          <h1
            ref={ref}
            className={` text-5xl font-bold ${
              inView ? "text-animate-type" : ""
            }`}
          >
            Hi, I'm Alex Wittwer
          </h1>
        </div>
      </section>
      <div className="p-44"></div>
    </>
  );
}

export default About;
