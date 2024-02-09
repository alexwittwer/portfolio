/* eslint-disable react/no-unescaped-entities */
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import simplecalc from "../assets/simplecalc.jpg";
import weatherify from "../assets/weatherify.jpg";
import battleship from "../assets/battleship.jpg";
import hardena from "../assets/hardena.jpg";
import github from "../assets/github.svg";
import external from "../assets/external.svg";
import tictactoe from "../assets/tictactoe.jpg";
import booknerd from "../assets/booknerd.jpg";
import dashboard from "../assets/dashboard.jpg";
import cvbuilder from "../assets/cv-builder.jpg";
import pokememory from "../assets/pokememory.png";
import etchasketch from "../assets/etchasketch.jpg";
import todoer from "../assets/todoer.jpeg";
import odinrecipes from "../assets/odinrecipes.jpeg";
import ggio from "../assets/ggio.webp";
import blueboard from "../assets/blueboard.webp";
import inventory from "../assets/inventory.webp";
import crumbum from "../assets/crumbum.webp";

function Title() {
  const { ref: projRef, inView: projInView } = useInView({
    threshold: 0,
    rootMargin: "300px",
  });
  return (
    <section className="flex tech-lines mt-64 flex-col justify-center items-center h-screen">
      <p
        ref={projRef}
        className={`text-slate-100  text-2xl text-center ${
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
      className={`card bg-slate-100 rounded-md hover:outline-5 hover:outline hover:outline-cyan-400 my-2 items-center justify-center ${
        projInView ? "fade-in" : ""
      }`}
    >
      <img
        src={imageURL}
        alt=""
        className="object-cover portfolio-image"
        width={"500px"}
      />
      <div className="card-text text-xs p-2">
        <h3 className="text-base items-center">{title}</h3>
        <p className="text-slate-900">{desc}</p>{" "}
        <div className="links">
          <a
            className="p-3 text-md lg:text-lg bg-slate-800 text-slate-50 rounded-md hover:scale-105 transition-all"
            target="blank"
            href={repo}
          >
            Code
          </a>
          <a
            className="p-3 text-md lg:text-lg bg-slate-800 text-slate-50 rounded-md hover:scale-105 transition-all"
            target="blank"
            href={live}
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <section
      id="Projects"
      className="portfolio flex flex-col text-slate-900 gap-2 items-center my-10"
    >
      <a
        href="https://github.com/alexwittwer/blog-api/"
        className="cursor-default"
        target="blank"
      >
        <Card
          imageURL={crumbum}
          title={"crumbum"}
          desc={
            "A full stack blog built with MongoDB, React, Express, Node.js, TailwindCSS, daisyUI and various other tools as part of The Odin Project"
          }
          live={"https://www.crumbum.club/"}
          repo={"https://github.com/alexwittwer/blog-api/"}
        />
      </a>
      <a
        href="https://github.com/alexwittwer/shopping-cart/"
        className="cursor-default"
        target="blank"
      >
        <Card
          imageURL={ggio}
          title={"GG.io Shop"}
          desc={
            "A multi-routed video-game webstore, built with React and TailwindCSS."
          }
          live={"https://ggio.vercel.app/"}
          repo={"https://github.com/alexwittwer/shopping-cart/"}
        />
      </a>
      <a
        href="https://biamp-inventory-proto.up.railway.app/"
        className="cursor-default"
        target="blank"
      >
        <Card
          imageURL={inventory}
          title={"Biamp Inventory CMS"}
          desc={
            "An inventory CRUD app with Biamp products as placeholders, as part of The Odin Project"
          }
          live={"https://biamp-inventory-proto.up.railway.app/"}
          repo={"https://github.com/alexwittwer/non-conformance-crud"}
        />
      </a>
      <a
        href="https://github.com/alexwittwer/memory-card/"
        className="cursor-default"
        target="blank"
      >
        <Card
          imageURL={pokememory}
          title={"Pokemon Memory Card"}
          desc={
            "A flashcard memory game with Pokemon, built with React and TailwindCSS."
          }
          live={"https://memory-card-peach.vercel.app/"}
          repo={"https://github.com/alexwittwer/memory-card/"}
        />
      </a>
      <a
        href="https://github.com/alexwittwer/simpleCalc/"
        className="cursor-default"
        target="blank"
      >
        <Card
          imageURL={simplecalc}
          title={"simpleCalc"}
          desc={
            "A vintage style calculator app, using JavaScript, CSS, HTML as part of The Odin Project"
          }
          live={"https://alexwittwer.github.io/simpleCalc/"}
          repo={"https://github.com/alexwittwer/simpleCalc/"}
        />
      </a>
      <a
        href="https://github.com/alexwittwer/cv-builder"
        className="cursor-default"
        target="blank"
      >
        <Card
          imageURL={cvbuilder}
          title={"CV Builder"}
          desc={
            "React-based CV builder with TailwindCSS, as part of The Odin Project"
          }
          live={"https://cv-builder-nine-henna.vercel.app/"}
          repo={"https://github.com/alexwittwer/cv-builder/"}
        />
      </a>
      <a
        href="https://github.com/alexwittwer/mini-message-board/"
        className="cursor-default"
        target="blank"
      >
        <Card
          imageURL={blueboard}
          title={"BlueBoard"}
          desc={
            "A mini-message board built with Express, Mongoose, MongoDB, pug and SASS, as part of The Odin Project"
          }
          live={"https://blue-board.up.railway.app/"}
          repo={"https://github.com/alexwittwer/mini-message-board/"}
        />
      </a>
      <a
        href="https://github.com/alexwittwer/weather-app/"
        className="cursor-default"
        target="blank"
      >
        <Card
          imageURL={weatherify}
          title={"Weatherify"}
          desc={
            "A dynamic weather app using an free weather API, as part of The Odin Project curriculum"
          }
          live={"https://alexwittwer.github.io/weather-app/"}
          repo={"https://github.com/alexwittwer/weather-app/"}
        />
      </a>
      <a
        href="https://github.com/alexwittwer/battleship/"
        className="cursor-default"
        target="blank"
      >
        <Card
          imageURL={battleship}
          title={"Battleship"}
          desc={
            "A remake of the classic Hasbro game, Battleship, as part of The Odin Project curriculum"
          }
          live={"https://alexwittwer.github.io/battleship/"}
          repo={"https://github.com/alexwittwer/battleship/"}
        />
      </a>
      <a
        href="https://github.com/alexwittwer/Hardena-Restaurant"
        className="cursor-default"
        target="blank"
      >
        <Card
          imageURL={hardena}
          title={"Hardena Restaurant"}
          desc={
            "A remake of local restaurant Hardena in Philadelphia, as part of The Odin Project"
          }
          live={"https://alexwittwer.github.io/Hardena-Restaurant/"}
          repo={"https://github.com/alexwittwer/Hardena-Restaurant/"}
        />
      </a>
      <a
        href="https://github.com/alexwittwer/admin-dashboard"
        className="cursor-default"
        target="blank"
      >
        <Card
          imageURL={dashboard}
          title={"Admin Dashboard"}
          desc={
            "CSS/HTML mockup of an admin dashboard, as part of The Odin Project"
          }
          live={"https://alexwittwer.github.io/admin-dashboard/"}
          repo={"https://github.com/alexwittwer/admin-dashboard/"}
        />
      </a>
      <a
        href="https://github.com/alexwittwer/naughts-and-crosses"
        className="cursor-default"
        target="blank"
      >
        <Card
          imageURL={tictactoe}
          title={"Naughts & Crosses"}
          desc={
            "Tic-Tac-Toe as an introduction to JavaScript, as part of The Odin Project"
          }
          live={"https://alexwittwer.github.io/naughts-and-crosses/"}
          repo={"https://github.com/alexwittwer/naughts-and-crosses/"}
        />
      </a>
      <a
        href="https://github.com/alexwittwer/BookNerd"
        className="cursor-default"
        target="blank"
      >
        <Card
          imageURL={booknerd}
          title={"BookNerd"}
          desc={"Library tracking app, as part of The Odin Project"}
          live={"https://alexwittwer.github.io/BookNerd/"}
          repo={"https://github.com/alexwittwer/BookNerd/"}
        />
      </a>
      <a
        href="https://github.com/alexwittwer/etch-a-sketch"
        className="cursor-default"
        target="blank"
      >
        <Card
          imageURL={etchasketch}
          title={"Etch-a-Sketch"}
          desc={"Pixel etch-a-sketch, as part of The Odin Project"}
          live={"https://alexwittwer.github.io/etch-a-sketch/"}
          repo={"https://github.com/alexwittwer/etch-a-sketch/"}
        />
      </a>
      <a
        href="https://github.com/alexwittwer/ToDoer"
        className="cursor-default"
        target="blank"
      >
        <Card
          imageURL={todoer}
          title={"ToDoer"}
          desc={"Classic To Do list project, as part of The Odin Project"}
          live={"https://alexwittwer.github.io/ToDoer/"}
          repo={"https://github.com/alexwittwer/ToDoer/"}
        />
      </a>
      <a
        href="https://github.com/alexwittwer/odinrecipes"
        className="cursor-default"
        target="blank"
      >
        <Card
          imageURL={odinrecipes}
          title={"Odin Recipes"}
          desc={
            "My first website and a reminder of where I came from. Part of The Odin Project"
          }
          live={"https://alexwittwer.github.io/odin-recipes/"}
          repo={"https://github.com/alexwittwer/odin-recipes/"}
        />
      </a>
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

Card.propTypes = {
  imageURL: PropTypes.any,
  title: PropTypes.string,
  live: PropTypes.string,
  repo: PropTypes.string,
  desc: PropTypes.string,
};
