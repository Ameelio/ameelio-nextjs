interface Props {
  className?: string;
}

const OverviewBackground = ({ className }: Props) => (
  <svg
    // width="733"
    // height="388"
    viewBox="0 0 733 388"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.9"
      d="M580.796 87.4444C665.012 59.0029 705.895 20.1652 733 0V368.326C699.484 372.743 686.305 353.311 615.771 353.311C527.113 353.311 505.72 374.509 363.653 385.55C316.552 389.211 253.165 388.397 193.574 385.55C119.039 381.989 -51.2364 366.622 14.9898 345.361C81.0208 324.162 104.532 330.345 147.052 291.04C181.568 248.201 178.122 209.096 226.762 170.472C312.042 102.756 494.991 116.423 580.796 87.4444Z"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="677.158"
        y1="352.988"
        x2="569.008"
        y2="-88.2964"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.161458" stopColor="#F66262" />
        <stop offset="0.932292" stopColor="#3577DA" />
      </linearGradient>
    </defs>
  </svg>
);

export default OverviewBackground;
