import { useRef, useEffect } from "react";
import Typed from "typed.js";

export default function AboutMe() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Hi!",
        "I'm Sai Khay Khun Mong.",
        "Creating bugs since 2022.",
        "<a href='https://www.facebook.com/simpleyourweb'>Like my Facebook page.</a>",
      ],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      className={`mono-font z-10 fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-green-500 font-bold font-mono`}
    >
      <span ref={el} />
    </div>
  );
}
