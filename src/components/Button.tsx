import { MouseEventHandler } from "react";
import styles from "./Button.module.css";

interface Props {
  variant?: "primary" | "secondary" | "default" | "danger";
  size?: "sm" | "md" | "lg";
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<Props> = (props) => {
  const { size = "md", variant = "default", type = "button" } = props;
  let className = "";
  switch (size) {
    case "lg":
      className += styles.lg;
      break;
    case "md":
      className += styles.md;
      break;
    case "sm":
      className += styles.sm;
      break;
  }
  switch (variant) {
    case "default":
      className += " " + styles.default;
      break;
    case "primary":
      className += " " + styles.primary;
      break;
  }
  return (
    <button className={className} onClick={props.onClick} type={type}>
      {props.label}
    </button>
  );
};
