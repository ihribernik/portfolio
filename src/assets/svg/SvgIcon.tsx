import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  width?: number;
  height?: number;
};

const SvgIcon = ({ children, className, height, width }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={width}
      height={height}
      className={className}
    >
      {children}
    </svg>
  );
};

export default SvgIcon;
