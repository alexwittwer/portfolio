import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const ref = useRef();
  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el,
      { scale: 0 },
      {
        scale: 1.4,
        duration: 1,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);
  return (
    <div className="App">
      <div style={{ height: "100vh" }}></div>
      <img
        ref={ref}
        src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png"
        alt=""
      />
    </div>
  );
};

export default App;
