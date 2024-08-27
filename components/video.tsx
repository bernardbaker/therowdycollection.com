"use client";

import ReactPlayer from "react-player";
import styles from "./video.module.css";

interface Props {
  url: string;
}
export const Video = ({ url }: Props) => (
  <ReactPlayer url={url} className={styles.reactPlayer} controls />
);
