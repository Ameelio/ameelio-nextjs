interface Props {
  className: string;
  
}

const HeroBackground = ({ className }: Props) => (
  <svg
    className={className}
    width={1671}
    height={639}
    viewBox="0 0 1671 639"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <path
        opacity="0.9"
        d="M1692.45 0H-20.3073V639C293.73 639 435.812 612.005 565.703 592.728C730.337 568.293 858.708 527.946 1113.27 527.946C1377.99 527.946 1520.15 592.728 1692.45 592.728V0Z"
        fill="url(#paint0_linear)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="1561.96"
        y1="581.338"
        x2="1432.74"
        y2="-166.746"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.161458" stopColor="#F66262" />
        <stop offset="0.932292" stopColor="#3577DA" />
      </linearGradient>
      <clipPath id="clip0">
        <rect width="1671" height="639" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default HeroBackground;
