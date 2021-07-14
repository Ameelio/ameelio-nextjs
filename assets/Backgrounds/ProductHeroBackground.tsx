interface Props {
  className?: string;
}

const ProductHeroBackground = ({ className }: Props) => (
  <svg
    viewBox="0 0 1263 740"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      opacity="0.9"
      d="M678 282.5C467.661 348.588 59 379.5 33.5 496.5L0 740C9.5 740 54.6838 717.249 188.5 710.5C476 696 562.402 600.134 815 581.5C937 572.5 1135 542 1245 525.5L1262.25 0C1245.09 16.917 1170 129 1059 155.5C930.119 186.269 843.5 230.5 678 282.5Z"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="1166.08"
        y1="673.225"
        x2="940.532"
        y2="-157.729"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.161458" stopColor="#F66262" />
        <stop offset="0.932292" stopColor="#3577DA" />
      </linearGradient>
    </defs>
  </svg>
);

export default ProductHeroBackground;
