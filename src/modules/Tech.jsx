import { useInView } from "react-intersection-observer";
import Marquee from "react-fast-marquee";

export default function Tech() {
  const { ref: techRef1, inView: techInView1 } = useInView({
    threshold: 0,
    rootMargin: "600px",
  });
  const { ref: techRef2, inView: techInView2 } = useInView({
    threshold: 0,
    rootMargin: "600px",
  });
  const { ref: techRef3, inView: techInView3 } = useInView({
    threshold: 0,
    rootMargin: "600px",
  });
  const { ref: innerRef1, inView: innerRefView1 } = useInView({
    threshold: 0,
    rootMargin: "600px",
  });
  const { ref: innerRef2, inView: innerRefView2 } = useInView({
    threshold: 0,
    rootMargin: "600px",
  });
  const { ref: innerRef3, inView: innerRefView3 } = useInView({
    threshold: 0,
    rootMargin: "600px",
  });

  return (
    <>
      <section
        id="Tech"
        className={`h-screen text-lg flex flex-col items-center justify-center tech-lines text-white`}
      >
        <div className="my-40">
          <h2 className="my-4 text-2xl text-center">
            Here are some of the things I use:{" "}
          </h2>
        </div>
        <div className=" max-w-3/4 relative flex flex-col gap-10">
          <div
            ref={techRef1}
            className={`flex backdrop-blur-lg border-slate-50 border-2 relative bg-slate-50 bg-opacity-30 justify-center p-5 rounded-md ${
              techInView1 ? "slide-in-bottom" : ""
            }`}
          >
            <div className="text-center text-slate-900">
              <h3 className="text-slate-50">Languages</h3>
              <div
                ref={innerRef1}
                className={`flex ${
                  innerRefView1 && "fade-in"
                } flex-wrap justify-center gap-5`}
              >
                <img
                  src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png"
                  title="HTML5"
                  alt=""
                  width="50px"
                />
                <img
                  src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png"
                  title="CSS3"
                  alt=""
                  width="50px"
                />
                <img
                  src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"
                  title="JavaScript"
                  alt=""
                  width="50px"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png"
                  alt=""
                  width="50px"
                />
              </div>
            </div>
          </div>
          <div
            ref={techRef2}
            className={`flex backdrop-blur-lg border-slate-50 border-2 relative bg-slate-50 bg-opacity-30 justify-center p-5 rounded-md  ${
              techInView2 ? "slide-in-bottom" : ""
            }`}
          >
            <div className="text-center text-slate-900">
              <h3 className="text-slate-50">Frameworks & Databases</h3>
              <div
                ref={innerRef2}
                className={`flex ${
                  innerRefView2 && "fade-in"
                } flex-wrap justify-center gap-5`}
              >
                <img
                  src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
                  title="React.js"
                  alt=""
                  width="50px"
                />
                <img
                  src="https://avatars.githubusercontent.com/u/67109815?s=48&v=4"
                  title="TailwindCSS"
                  alt=""
                  width="50px"
                />
                <img
                  src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/8d565/express-js.webp"
                  alt=""
                  width="50px"
                />
                <img
                  src="https://www.svgrepo.com/show/331488/mongodb.svg"
                  alt=""
                  width="50px"
                />
              </div>
            </div>
          </div>
          <div
            ref={techRef3}
            className={`flex backdrop-blur-lg border-slate-50 border-2 relative bg-slate-50 bg-opacity-30 justify-center p-5 rounded-md ${
              techInView3 ? "slide-in-bottom" : ""
            }`}
          >
            <div className="text-center text-slate-900">
              <h3 className="text-slate-50">Tools</h3>
              <div
                ref={innerRef3}
                className={`flex ${
                  innerRefView3 && "fade-in"
                } flex-wrap justify-center gap-5`}
              >
                <img
                  src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png"
                  title="Git"
                  alt=""
                  width="50px"
                />
                <img
                  src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png"
                  title="node.js"
                  alt=""
                  width="50px"
                />
                <img
                  src="https://github.com/marwin1991/profile-technology-icons/assets/62091613/b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35"
                  title="Vite"
                  alt=""
                  width="50px"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"
                  alt=""
                  title="Sass"
                  width="50px"
                />
                <img
                  src="https://avatars.githubusercontent.com/u/7552965?s=280&v=4"
                  alt=""
                  title="Mongoose"
                  width="50px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
