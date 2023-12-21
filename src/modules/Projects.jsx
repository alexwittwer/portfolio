import { useInView } from "react-intersection-observer";
import simplecalc from "../assets/simplecalc.png";
import weatherify from "../assets/weatherify.png";
import battleship from "../assets/battleship.png";
import hardena from "../assets/hardena.png";
import github from "../assets/github.svg";
import external from "../assets/external.svg";

function Title() {
  const { ref: projRef, inView: projInView } = useInView({
    threshold: 0,
    rootMargin: "300px",
  });
  return (
    <section
      id="Projects"
      className="flex flex-col justify-center items-center h-screen"
    >
      <p
        ref={projRef}
        className={`text-slate-100 text-lg text-center ${
          projInView ? "fade-in" : ""
        }`}
      >
        ...and some of the projects I've completed
      </p>
    </section>
  );
}

function Card({ imageURL, title, desc, repo, live }) {
  const { ref: projRef, inView: projInView } = useInView({
    threshold: 0,
    rootMargin: "300px",
  });

  return (
    <div
      ref={projRef}
      className={`card bg-slate-100 rounded-md my-2 flex flex-col items-center justify-center ${
        projInView ? "fade-in" : ""
      }`}
    >
      <img src={imageURL} alt={desc} className="object-cover" width={"500px"} />
      <div className="card-text text-xs p-2">
        <h3 className="text-base items-center">{title}</h3>
        <p className="text-slate-900">{desc}</p>{" "}
        <div className="links">
          <a href={repo}>
            <img src={github} alt=" " width={"30px"} />
          </a>
          <a href={live}>
            <img src={external} alt=" " width={"30px"} />
          </a>
        </div>
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <section className="portfolio flex flex-col text-slate-900 gap-2 items-center my-10">
      <Card
        imageURL={simplecalc}
        title={"simpleCalc"}
        desc={
          "A vintage style calculator app, using JavaScript, CSS, HTML as part of The Odin Project curriculum"
        }
        live={"https://alexwittwer.github.io/simpleCalc/"}
        repo={"https://github.com/alexwittwer/simpleCalc/"}
      />
      <Card
        imageURL={weatherify}
        title={"Weatherify"}
        desc={
          "A dynamic weather app using an free weather API, as part of The Odin Project curriculum"
        }
        live={"https://alexwittwer.github.io/weather-app/"}
        repo={"https://github.com/alexwittwer/weather-app/"}
      />
      <Card
        imageURL={battleship}
        title={"Battleship"}
        desc={
          "A remake of the classic Hasbro game, Battleship, as part of The Odin Project curriculum"
        }
        live={"https://alexwittwer.github.io/battleship/"}
        repo={"https://github.com/alexwittwer/battleship/"}
      />
      <Card
        imageURL={hardena}
        title={"Hardena Restaurant"}
        desc={
          "A remake of local restaurant Hardena in Philadelphia, as part of The Odin Project curriculum"
        }
        live={"https://alexwittwer.github.io/Hardena-Restaurant/"}
        repo={"https://github.com/alexwittwer/Hardena-Restaurant/"}
      />
    </section>
  );
}

export default function Projects() {
  return (
    <>
      <Title />
      <Portfolio />
    </>
  );
}
