import type { NextPage } from "next";
import Image from "next/image";
import PageOne from "../components/Page1";
import styles from "../styles/Home.module.css";
import PageTwo from "../components/Page2";
import PageThree from "../components/Page3";
import PageFour from "../components/Page4";
import PageFive from "../components/Page5";
import PageSix from "../components/Page6";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
      <PageFive />
      <PageSix />
    </div>
  );
};

export default Home;