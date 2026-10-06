import type { ReactNode } from "react";

import "./TrustItem.scss";

interface TrustItemProps {
  children: ReactNode;
}

const TrustItem = ({
  children,
}: TrustItemProps) => {
  return (
    <div className="trust-item">
      <span
        className="trust-item__icon"
        aria-hidden="true"
      >
        ✓
      </span>

      <span className="trust-item__text">
        {children}
      </span>
    </div>
  );
};

export default TrustItem;