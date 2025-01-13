import Header from "@/components/ui/Header/Header";
import styles from "./page.module.css";
import { paytoneOne, patricHand } from './fonts/fonts'
import Image from "next/image";
export default function Home() {

  return (
    <div className={styles.main}>
      <div className={`${styles.gradient} ${styles.gradient1}`}></div>
      <div className={`${styles.gradient} ${styles.gradient2}`}></div>
      <div className={`${styles.gradient} ${styles.gradient3}`}></div>
      <Header></Header>

      <div id="home" className={styles.heroSection}>
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

      <div className={styles.featuredOverlay} >
        <div className={styles.featuredbox}>
          <Image src={"/static/instagram.svg"} alt="no icon found" width={170} height={100}></Image>
          <Image src={"/static/Adobe.svg"} alt="no icon found" width={170} height={100}></Image>
          <Image src={"/static/Arcade.svg"} alt="no icon found" width={170} height={100}></Image>
          <Image src={"/static/Paypak.svg"} alt="no icon found" width={150} height={100}></Image>
          <Image src={"/static/Desiney.svg"} alt="no icon found" width={170} height={100}></Image>
        </div>
      </div>

      <div id="features" className={styles.featureContainer}>
        <div className={styles.featureLeft}>
          <Image src={"/static/image 3.png"} width={660} height={525} alt="no image found" ></Image>
        </div>
        <div className={styles.featureRight}>
          <p className={patricHand.className}>Top Featured</p>
          <h1 className={paytoneOne.className}><span>Easily</span> schedule tasks and reminders.</h1>
          <button className={styles.btn}>Learn More</button>
        </div>
      </div>

      <div id="contact" className={styles.ctaContainer}>
        <h1 className={paytoneOne.className}>Boost <span>Your</span> Productivity Today!</h1>
        <p className={patricHand.className}>Join millions of users who are getting more done with TaskFlow.</p>
        <button className={styles.btn}>Learn More</button>

      </div>

      <div className={styles.featureContainer}>
        <div className={styles.featureRight}>
          <p className={patricHand.className}>Top Featured</p>
          <h1 className={paytoneOne.className}>Visualize <span>Your</span> Progress With <span>Charts</span>.</h1>
          <button className={styles.btn}>Learn More</button>
        </div>
        <div className={styles.featureLeft}>
          <Image src={"/static/image 4.png"} width={660} height={525} alt="no image found" ></Image>
        </div>
      </div>

      <div id="newsletter" className={styles.footer}>
        <div className={styles.linksBox}>
          <h2 className={paytoneOne.className}><span>Links:</span></h2>
          <ul className={patricHand.className}>
            <li>Contact</li>
            <li>About us</li>
            <li>Socal Networks</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className={styles.linksBox}>
          <h2 className={paytoneOne.className}><span>Info:</span></h2>
          <ul className={patricHand.className}>
            <li>Youtube</li>
            <li>WhatsApp</li>
            <li>Instagram</li>
            <li>Tik Tok</li>
          </ul>
        </div>
        <div className={styles.newsletter}>
          <h1 className={paytoneOne.className}>subscribe to <span>our</span> newslatter</h1>
          <input type="text" placeholder="Enter Your Email" />
          <button className={styles.btn}>Learn More</button>

        </div>
      </div>
    </div>
  );
}
