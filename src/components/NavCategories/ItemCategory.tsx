import { Component } from "solid-js";
import cn from "classnames";

import styles from "./styles.module.css";

interface Props {
  src?: string;
  title: string;
  link?: string;
  hot?: boolean;
}

export const ItemCategory: Component<Props> = ({
  src = "",
  title,
  link = "#",
  hot = false,
}) => {
  return (
    <li>
      <a className={styles.wrapperItem} href={link}>
        <img className={styles.icon} src={src} />
        <span className={styles.text}>{title}</span>
      </a>
    </li>
  );
};
