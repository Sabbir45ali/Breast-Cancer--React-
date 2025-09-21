export const Cross = ({ size }) => (
  <div
    style={{
      width: size,
      height: size,
      margin: "auto",
      display: "inline-block",
    }}
  >
    <style>
      {`
        .circular-chart {
          display: inline-block;
          margin: 10px auto;
          max-width: 100%;
          max-height: 100%;
        }
        .circle {
          stroke: red;
          fill: none;
          stroke-width: 3.5;
          stroke-linecap: round;
          stroke-dasharray: 100, 100;
          animation: progress 0.8s ease-out forwards;
        }
        @keyframes progress {
          0% {
            stroke-dasharray: 0, 100;
          }
        }
        .cross {
          fill: none;
          stroke: red;
          stroke-width: 3px;
          stroke-linecap: round;
          stroke-dasharray: 20px;
          stroke-dashoffset: 20px;
          animation: drawCross 0.4s ease-out forwards;
        }
        .cross.second {
          animation-delay: 0.3s;
        }
        @keyframes drawCross {
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}
    </style>

    <svg viewBox="0 0 36 36" className="circular-chart">
      {/* Full Circle */}
      <circle className="circle" cx="18" cy="18" r="16" />
      {/* Smaller Cross (centered inside circle) */}
      <line className="cross" x1="13" y1="13" x2="23" y2="23" />
      <line className="cross second" x1="23" y1="13" x2="13" y2="23" />
    </svg>
  </div>
);
