import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import "./Button.scss";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface CommonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  icon?: ReactNode;
}

type LinkButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const Button = ({
  children,
  variant = "primary",
  className = "",
  icon,
  ...props
}: ButtonProps) => {
  const classes = [
    "button",
    `button--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in props && props.href) {
    return (
      <a
        className={classes}
        {...props}
      >
        <span className="button__label">
          {children}
        </span>

        {icon && (
          <span className="button__icon">
            {icon}
          </span>
        )}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...props}
    >
      <span className="button__label">
        {children}
      </span>

      {icon && (
        <span className="button__icon">
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;