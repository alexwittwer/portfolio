import { useInView } from "react-intersection-observer";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github_white.svg";
import instagram from "../assets/instagram.svg";
import twotwoslides from "../assets/22slides.png";

function MailTo() {
  return (
    <section className="h-screen grid">
      <form
        action="mailto:wittweral@gmail.com"
        method="post"
        encType={"text/plain"}
        className="grid"
      >
        Name:
        <input type="text" name="name" />
        E-mail:
        <input type="text" name="mail" />
        Comment:
        <input type="text" name="comment" size="50" />
        <input type="submit" value="Send" />
        <input type="reset" value="Reset" />
      </form>
    </section>
  );
}

export default function Socials() {
  const { ref: socRef, inView: socInView } = useInView({
    threshold: 0,
    rootMargin: "300px",
  });

  return (
    <section className="h-screen">
      <h2
        ref={socRef}
        className={` ${
          socInView ? "fade-in" : ""
        } h-screen flex flex-col justify-center text-center items-center text-slate-100 text-xl gap-5`}
      >
        You can reach me or find more of my work at any of the following links.{" "}
        <div className="flex justify-center items-center gap-5 p-5 socials">
          <a href="https://www.linkedin.com/in/alex-wittwer/">
            <img src={linkedin} alt="" width={"50px"} />
          </a>
          <a href="https://github.com/alexwittwer">
            <img src={github} alt="" width={"50px"} />
          </a>
          <a href="https://www.instagram.com/_wittwer/">
            <img src={instagram} alt="" width={"50px"} />
          </a>
          <a href="https://awittwer.22slides.com">
            <img src={twotwoslides} alt="" width={"50px"} />
          </a>
        </div>
        <p>
          Or{" "}
          <a href="mailto: wittweral+portfolio@gmail.com" className="underline">
            just send me an email.
          </a>
        </p>
      </h2>
    </section>
  );
}
