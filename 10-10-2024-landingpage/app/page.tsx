import Header from "@/components/ui/Header/Header";
import styles from "./page.module.css";
import {paytoneOne , patricHand} from './fonts/fonts'
import Image from "next/image";
export default function Home() {
  
  return (
    <div className={styles.main}>
      <Header></Header> 
      <div className={styles.heroSection}>
        <div className={styles.left}>
          <h1 className={paytoneOne.className}>Take Control of Your <span>Day</span> with <span>Task</span>Flow.</h1>
          <p className={patricHand.className}>The easiest way to manage your tasks, track your progress, and achieve your goals</p>
          <div className={styles.btnBox}>
          <button className={styles.btn}>Get Started</button>
          <button className={`${styles.btn} ${styles.btn2}`}>Learn More</button>
          </div>
        </div>
        <div className={styles.right}>
          <Image src={"/static/image 1.png"} width={660} height={525} alt="no image found" ></Image>
        </div>
      </div>
    </div>
  );
}
