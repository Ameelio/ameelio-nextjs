interface Props {
  className?: string;
}

const ProductHeroBackground = ({ className }: Props) => (
  <svg
  className={className}
  viewBox="0 0 1134 730"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <mask
    id="mask0"
    mask-type="alpha"
    maskUnits="userSpaceOnUse"
    x="0"
    y="0"
    width="1134"
    height="730"
  >
    <rect width="1134" height="730" fill="#C4C4C4" />
  </mask>
  <g mask="url(#mask0)">
    <path
      opacity="0.9"
      d="M586 277.5C375.661 343.588 -33 374.5 -58.5 491.5L-92 735C-82.5 735 -37.3162 712.249 96.5 705.5C384 691 470.402 595.134 723 576.5C845 567.5 1043 537 1153 520.5L1170.25 -5C1153.09 11.917 1078 124 967 150.5C838.119 181.269 751.5 225.5 586 277.5Z"
      fill="url(#paint0_linear)"
    />
  </g>
  <defs>
    <linearGradient
      id="paint0_linear"
      x1="1074.08"
      y1="668.225"
      x2="848.532"
      y2="-162.729"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.161458" stopColor="#F66262" />
      <stop offset="0.932292" stopColor="#3577DA" />
    </linearGradient>
  </defs>
</svg>
);

export default ProductHeroBackground;
