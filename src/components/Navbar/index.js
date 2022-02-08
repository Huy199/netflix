import clsx from "clsx";
import styles from "./Navbar.module.scss";
import logoNetflix from "../../assets/images/netflixLogos.png";
import { MdSearch } from "react-icons/md";
import { useScrollY } from "../hooks";
function Navbar() {
  const [scrollY] = useScrollY();
  return (
    <div
      className={clsx(styles.navContainer)}
      style={
        scrollY < 50
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "var(--color-background)" }
      }
    >
      <div div className={clsx(styles.logo)}>
        <img className={styles.logoImage} src={logoNetflix} alt="logo" />
      </div>
      <div div className={clsx(styles.navSearch)}>
        <MdSearch className={clsx(styles.iconSearch)} />
        <input
          className={clsx(styles.inputNav)}
          type="text"
          placeholder="Input title, genres, people "
        />
      </div>
    </div>
  );
}

export default Navbar;
