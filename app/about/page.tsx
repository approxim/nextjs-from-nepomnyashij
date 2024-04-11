import { Metadata } from "next";
import styles from "./About.module.scss";

export const metadata: Metadata = {
  title: "About | Next App",
  description: "some desctiption this page"
}

export default function About () {
  return (
    <h3>
      Select subitem
    </h3>
  )
}

