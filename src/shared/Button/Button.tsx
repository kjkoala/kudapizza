import { Component, JSX } from "solid-js";
import cn from "classnames";

import styles from "./styles.module.css";

export enum Size {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

type Template = "white" | "orange";

interface Props {
  template: Template;
  border?: boolean;
  onClick?: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent>;
}

interface CompoundComponents {
  Text: Component<{ size?: Size }>;
  Icon: Component<{ src: string }>;
}

function typeButon(type: Template): string {
  if (type === "orange") {
    return styles.templateOrange;
  }
  return styles.templateWhite;
}

const Button: Component<Props> & CompoundComponents = ({
  children,
  template,
  border = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        styles.button,
        typeButon(template),
        border && styles.border
      )}>
      {children}
    </button>
  );
};

const Text: Component<{ size?: Size }> = ({ children, size = Size.SMALL }) => (
  <span
    classList={{
      [styles.small]: size === Size.SMALL,
      [styles.medium]: size === Size.MEDIUM,
      [styles.large]: size === Size.LARGE,
    }}>
    {children}
  </span>
);
const Icon: Component<{ src: string }> = ({ src }) => <img src={src} />;

Button.Text = Text;
Button.Icon = Icon;
export { Button };
