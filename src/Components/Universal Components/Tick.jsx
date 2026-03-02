export const Tick = ({ size }) => (
  <div
    style={{
      width: size,
      height: size,
      margin: 'auto',
      display: 'inline-block'
    }}
  >
    <style>
      {`
          .circular-chart {
          display: inline-block;
          margin: 10px auto;
          max-width: 80%;
          max-height: 250px;
        }
          .circle {
          stroke: green;
          fill: none;
          stroke-width: 3.8;
          stroke-linecap: round;
          animation: progress 1s ease-out ${true ? 'forwards' : 'infinite'};
          // transform-origin: center;
        }
          @keyframes progress {
          0% {
            stroke-dasharray: 0, 100;
        }
        }
          .tick {
          fill: none;
          stroke: green;
          stroke-width: 3.8px;
          stroke-linecap: round;
          /* Stroke-dasharray property */
          stroke-dasharray: 50px;
          stroke-dashoffset: 50px;
          animation: move 0.3s ease-out forwards;
          -webkit-animation-delay: 0.3s;
          -moz-animation-delay: 0.3s;
          -o-animation-delay: 0.3s;
          animation-delay: 0.3s;
        }
          @keyframes move {
          100% {
            stroke-dashoffset: 0;
        }
        }
      `}
    </style>
    <svg viewBox='0 0 36 36' className='circular-chart'>
      <path
        className='circle'
        strokeDasharray='92, 100'
        d='M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831'
        transform='rotate(75, 18, 18)'
      />
      <path
        className='tick'
        id='svg_2'
        d='m80.5,196.4375l60.5,10.5625l111,-112'
        transform='translate(4, -5)'
      />
      <path
        className='tick'
        id='svg_3'
        d='m3.063615,19.054611l10.56037,10.568181l17.248714,-17.373705'
        transform='translate(4, -5)'
      />
    </svg>
    <svg
      class='checkmark'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 52 52'
    >
      <circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none' />
      <path
        class='checkmark__check'
        fill='none'
        d='M14.1 27.2l7.1 7.2 16.7-16.8'
      />
    </svg>
    {/* <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div> */}
  </div>
)
