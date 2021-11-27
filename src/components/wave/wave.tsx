import React, { useEffect } from "react";
import anime from "animejs";
import { string, number, bool } from "prop-types";

const shapes = [
  "M0,160L60,138.7C120,117,240,75,360,53.3C480,32,600,32,720,74.7C840,117,960,203,1080,234.7C1200,267,1320,245,1380,234.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
];
type Propstype  = {
  className : string
  color : string
  duration : number
  invert : boolean
}
function MovingWave({ className, color, duration, invert } : Propstype) {
  useEffect(() => {
    anime({
      targets: ".morph-path",
      d: shapes.map((shape) => ({ value: shape })),
      duration,
      direction: "alternate",
      autoplay: true,
      easing: "easeInOutQuad",
      loop: true
    });
  });

  return (
    <div className={`moving-wave ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={color}
          className="morph-path"
          transform={invert ? "scale(1,-1) translate(0,-320)" : ""}
          d="M0,192L60,208C120,224,240,256,360,229.3C480,203,600,117,720,80C840,43,960,53,1080,85.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
    </div>
  );
}


MovingWave.defaultProps = {
  className: "",
  color: "#ffffff",
  duration: 15000,
  invert: false
};

export default MovingWave;