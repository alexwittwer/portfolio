import { useInView } from "react-intersection-observer";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github_white.svg";
import instagram from "../assets/instagram.svg";
import twotwoslides from "../assets/22slides.png";

export default function Socials() {
  const { ref: socRef, inView: socInView } = useInView({
    threshold: 0,
    rootMargin: "300px",
  });

  return (
    <section className="h-screen">
      <div
        ref={socRef}
        className={` ${
          socInView ? "fade-in" : ""
        } h-screen flex flex-col justify-center text-center items-center text-slate-100 text-xl gap-5`}
      >
        <h2>
          You can reach me or find more of my work at any of the following
          links.{" "}
        </h2>
        <div className="flex justify-center items-center gap-5 p-5 socials">
          <a href="https://www.linkedin.com/in/alex-wittwer/">
            <img src={linkedin} alt=" " width={"50px"} />
          </a>
          <a href="https://github.com/alexwittwer">
            <img src={github} alt=" " width={"50px"} />
          </a>
          <a href="https://www.instagram.com/_wittwer/">
            <img src={instagram} alt=" " width={"50px"} />
          </a>
          <a href="https://awittwer.22slides.com/photojournalism">
            <img src={twotwoslides} alt=" " width={"50px"} />
          </a>
        </div>
        <h3>
          Or{" "}
          <a href="mailto: wittweral+portfolio@gmail.com" className="underline">
            just send me an email.
          </a>
        </h3>
      </div>
    </section>
  );
}
