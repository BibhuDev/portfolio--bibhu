import React, { useEffect, useRef } from "react";
import "./InteractiveBackground.css";

const InteractiveBackground = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!bgRef.current) return;
      
      // Update CSS variables with mouse coordinates
      bgRef.current.style.setProperty("--mouse-x", `${e.clientX}px`);
      bgRef.current.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="interactive-bg-container" ref={bgRef}>
      {/* The dot matrix pattern overlay */}
      <div className="dot-matrix" />
      {/* The dynamic interactive glowing spot */}
      <div className="radial-glow" />
    </div>
  );
};

export default InteractiveBackground;