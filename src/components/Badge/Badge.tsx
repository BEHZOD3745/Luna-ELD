import type { ReactNode } from "react";

import "./Badge.scss";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

const Badge = ({
  children,
  className = "",
}: BadgeProps) => {
  return (
    <div className={`badge ${className}`}>
      <span className="badge__dot" />
      <span className="badge__text">
        {children}
      </span>
    </div>
  );
};

export default Badge;