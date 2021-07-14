interface Props {
  className?: string;
}
const OurStoryBackground = ({ className }: Props) => (
  <svg
    className={className}
    viewBox="0 0 1154 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="1154"
      height="600"
    >
      <rect width="1154" height="600" fill="#C4C4C4" />
    </mask>
    <g mask="url(#mask0)">
      <path d="M1154 1532V2L0 211.67V1532H1154Z" fill="#EBF4FB" />
    </g>
  </svg>
);

export default OurStoryBackground;
