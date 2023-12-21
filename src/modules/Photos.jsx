import { useInView } from "react-intersection-observer";
import photo1 from "../assets/photo1.webp";
import photo2 from "../assets/photo2.webp";
import photo3 from "../assets/photo3.webp";
import photo5 from "../assets/photo5.webp";
import photo6 from "../assets/photo6.webp";
import photo7 from "../assets/photo7.webp";
import photo8 from "../assets/photo8.webp";
import photo9 from "../assets/photo9.webp";
import photo10 from "../assets/photo10.webp";
import photo11 from "../assets/photo11.webp";

function Intro() {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "150px",
  });

  return (
    <section
      ref={ref}
      className={`h-screen grid justify-center items-center ${
        inView ? "fade-in" : ""
      }`}
    >
      <h2 className="text-slate-100 text-xl text-center">
        ...I am also an award winning photojournalist
      </h2>
    </section>
  );
}

function PhotoWrapper({ children }) {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "150px",
  });

  return (
    <div
      ref={ref}
      className={`rounded-md flex justify-center items-center ${
        inView ? "fade-in" : ""
      }`}
    >
      {children}
    </div>
  );
}

function Gallery({ children }) {
  return (
    <section
      id="Photos"
      className="grid grid-cols-1 gap-5 m-5 justify-center items-center"
    >
      <PhotoWrapper>
        <img
          src={photo1}
          alt="a wildland firefighter covered in soot"
          className="rounded-md"
        />
      </PhotoWrapper>
      <PhotoWrapper>
        <img
          src={photo2}
          alt="a man stands on a stump amidst a smoke filled clearing"
          className="rounded-md"
        />
      </PhotoWrapper>
      <PhotoWrapper>
        <img
          src={photo3}
          alt="a partially-nude woman stands in front of a line of armed police officers"
          className="rounded-md"
        />
      </PhotoWrapper>
      <PhotoWrapper>
        <img
          src={photo11}
          alt="fireworks explode over a golf course in eastern oregon"
          className="rounded-md"
        />
      </PhotoWrapper>
      <PhotoWrapper>
        <img
          src={photo5}
          alt="a high school football player hypes up the team in the locker room"
          className="rounded-md"
        />
      </PhotoWrapper>
      <PhotoWrapper>
        <img
          src={photo6}
          alt="a police gathering renders a final salute to a flag-draped casket"
          className="rounded-md"
        />
      </PhotoWrapper>
      <PhotoWrapper>
        <img
          src={photo7}
          alt="an angry bull chases down a trio of bull fighters"
          className="rounded-md"
        />
      </PhotoWrapper>
      <PhotoWrapper>
        <img
          src={photo8}
          alt="a high school baseball player juggles three baseballs in the dugout"
          className="rounded-md"
        />
      </PhotoWrapper>
      <PhotoWrapper>
        <img
          src={photo9}
          alt="a high school football player makes a break through the herd to score a touchdown"
          className="rounded-md"
        />
      </PhotoWrapper>
      <PhotoWrapper>
        <img
          src={photo10}
          alt="a cross country runner splashes a mountain of mud during a race"
          className="rounded-md"
        />
      </PhotoWrapper>
    </section>
  );
}

export default function Photos() {
  return (
    <>
      <Intro />
      <Gallery />
    </>
  );
}
