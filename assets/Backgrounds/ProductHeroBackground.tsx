interface Props {
  className?: string;
}

const ProductHeroBackground = ({ className }: Props) => (
  <div className="absolute  w-screen overflow-hidden z-0 right-0">

  <svg
    width="1474"
    height="730"
    viewBox="0 0 1474 730"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="object-cover"
  >
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="1474"
      height="730"
    >
      <rect width="1474" height="730" fill="#C4C4C4" />
    </mask>
    <g mask="url(#mask0)">
      <path
        opacity="0.9"
        d="M761.697 277.5C488.294 343.588 -42.8941 374.5 -76.0397 491.5L-119.584 735C-107.235 735 -48.5045 712.249 125.433 705.5C499.132 691 611.44 595.134 939.772 576.5C1098.35 567.5 1355.72 537 1498.7 520.5L1521.11 -5C1498.81 11.917 1401.21 124 1256.93 150.5C1089.41 181.269 976.817 225.5 761.697 277.5Z"
        fill="url(#paint0_linear)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="1396.12"
        y1="668.225"
        x2="1217.59"
        y2="-186.671"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.161458" stopColor="#F66262" />
        <stop offset="0.932292" stopColor="#3577DA" />
      </linearGradient>
    </defs>
  </svg>
  </div>

);

export default ProductHeroBackground;
