import styles from "./header.module.css";
import { Smooch_Sans } from "next/font/google";
import Link from "next/link";
import Button from "@/components/atoms/button/Button";

const SmoochSans = Smooch_Sans({ subsets: ["latin"] });

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerBar}>
        <div className={`${SmoochSans.className} ${styles.logo}`}>
          <a href="/page">Rimantas Petrikas</a>
        </div>
        <nav className={`${SmoochSans.className} ${styles.navWrapper}`}>
          <ul>
            <li>
              <Link href="/about/index.js"> About</Link>
            </li>
            <li>
              <Link href="/photoGallery/index.js"> Photo Albums</Link>
            </li>
            <li>
              <Link href="/publications/index.js"> Publications</Link>
            </li>
            <li>
              <Link href="/contact/index.js"> Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Button text="LOGIN" />
    </div>
  );
};

export default Header;
