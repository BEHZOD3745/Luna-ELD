import type { ReactNode } from "react";
import "./Button.scss";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;

  href?: string;
  type?: "button" | "submit" | "reset";

  disabled?: boolean;

  onClick?: () => void;
}

const Button = ({
  children,
  variant = "primary",
  className = "",
  href,
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) => {
  const classes = [
    "button",
    `button--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;