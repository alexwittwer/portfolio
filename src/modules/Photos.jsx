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
      <p className="text-slate-100 text-xl text-center">
        ...I am also an award winning photojournalist
      </p>
    </section>
  );
}

function PhotoWrapper({ children }) {
  return (
    <div className="rounded-md flex justify-center items-center">
      {children}
    </div>
  );
}

function Gallery({ children }) {
  return (
    <section
      id="Photos"
      className="grid grid-cols-2 gap-5 m-5 justify-center items-center"
    >
      <PhotoWrapper>
        <img src={photo1} alt="" className="rounded-md" />
      </PhotoWrapper>
      <PhotoWrapper>
        <img src={photo2} alt="" className="rounded-md" />
      </PhotoWrapper>
      <PhotoWrapper>
        <img src={photo3} alt="" className="rounded-md" />
      </PhotoWrapper>
      <PhotoWrapper>
        <img src={photo11} alt="" className="rounded-md" />
      </PhotoWrapper>
      <PhotoWrapper>
        <img src={photo5} alt="" className="rounded-md" />
      </PhotoWrapper>
      <PhotoWrapper>
        <img src={photo6} alt="" className="rounded-md" />
      </PhotoWrapper>
      <PhotoWrapper>
        <img src={photo7} alt="" className="rounded-md" />
      </PhotoWrapper>
      <PhotoWrapper>
        <img src={photo8} alt="" className="rounded-md" />
      </PhotoWrapper>
      <PhotoWrapper>
        <img src={photo9} alt="" className="rounded-md" />
      </PhotoWrapper>
      <PhotoWrapper>
        <img src={photo10} alt="" className="rounded-md" />
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
