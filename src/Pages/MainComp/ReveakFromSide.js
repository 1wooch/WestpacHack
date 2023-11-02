// RevealOnScroll.js
import React, { useEffect, useRef, useState } from "react";

const RevealFromSide = ({ children, direction }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const onWindowScroll = () => {
      const element = ref.current;
      if (element) {
        const { top } = element.getBoundingClientRect();
        const isVisible = top < window.innerHeight;

        if (isVisible) {
          // Calculate the scroll progress based on the element's position
          const elementHeight = element.clientHeight;
          const scrollFactor = (elementHeight + top) / elementHeight;
          setScrollProgress(scrollFactor);
        }

        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", onWindowScroll);

    return () => {
      window.removeEventListener("scroll", onWindowScroll);
    };
  }, []);

  const style = {
    transform: `translateX(${isVisible ? "0%" : direction === 'left' ? "-100%" : "100%"})`,
    transition: "transform 1s ease",
  };

  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  );
};

export default RevealFromSide;
