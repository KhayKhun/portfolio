import React, { useState } from "react";
import Typed from "typed.js";

export default function AboutMe() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  const [complete,setComplete] = useState(false);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Hello World!",
        "I'm Sai Khay Khun Mong.",
        "Creating bugs since 2022.",
        "<a href='https://www.facebook.com/simpleyourweb'>Like my Facebook page....</a>",
      ],
      typeSpeed: 20,
      loop: false,
      onComplete: () => {
        setComplete(true);
      },
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div
      className={`${
        complete && "underline tracking-wide plause"
      }  mono-font z-10 fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-green-400 font-bold font-mono`}
    >
      <span ref={el} />
    </div>
  );
}