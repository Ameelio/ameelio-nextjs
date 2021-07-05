interface Props {
  className: string;
}

const HeroBackground = ({ className }: Props) => (
    <svg className={className} viewBox="0 0 1671 725" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
    <path opacity="0.9" d="M1692.45 0H-20.3073V725C293.73 725 435.812 694.372 565.703 672.5C730.337 644.777 858.708 599 1113.27 599C1377.99 599 1520.15 672.5 1692.45 672.5V0Z" fill="url(#paint0_linear)"/>
    </g>
    <defs>
    <linearGradient id="paint0_linear" x1="1561.96" y1="659.578" x2="1397" y2="-182.181" gradientUnits="userSpaceOnUse">
    <stop offset="0.161458" stopColor="#F66262"/>
    <stop offset="0.932292" stopColor="#3577DA"/>
    </linearGradient>
    <clipPath id="clip0">
    <rect width="1671" height="725" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    
);

export default HeroBackground;
