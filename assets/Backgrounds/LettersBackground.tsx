interface Props {
  className?: string;
}
const LettersBackground = ({ className }: Props) => (
  <svg
    className={className}
    // width="725"
    // height="715"
    viewBox="0 0 725 715"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.9"
      d="M536.243 144.176C641.249 90.1862 690.978 38.2794 724.774 0L724.774 673.103C689.023 660.25 647.023 643.295 518.646 663.882C408.879 681.485 371.172 723.397 191.857 712.5C12.5423 701.603 -6.93256 561.213 1.64994 470.25C32.6526 141.662 386.255 221.294 536.243 144.176Z"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="669.558"
        y1="649.828"
        x2="344.325"
        y2="-62.9397"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.161458" stopColor="#F66262" />
        <stop offset="0.932292" stopColor="#3577DA" />
      </linearGradient>
    </defs>
  </svg>
);

export default LettersBackground;
