import { useIsMobile } from "hooks/useIsMobile";
import React from "react";

interface Props {
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}

export const H1 = ({ className, children }: Props) => {
  const isMobile = useIsMobile();
  return (
    <h1
      className={`font-bold break-normal	 ${
        isMobile ? "text-4xl" : "text-5xl"
      }  ${className}`}
    >
      {children}
    </h1>
  );
};

export const H2 = ({ className, children }: Props) => {
  const isMobile = useIsMobile();

  return (
    <h2
      className={`font-bold  break-normal	  ${
        isMobile ? "text-2xl" : "text-3xl"
      } ${className}`}
    >
      {children}
    </h2>
  );
};

export const H3 = ({ className, children }: Props) => {
  return <h2 className={`font-bold text-xl break-normal	 ${className}`}>{children}</h2>;
};
