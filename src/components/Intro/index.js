import ReactPlayer from "react-player";
import styles from "./Intro.module.scss";
import { VscMute, VscUnmute } from "react-icons/vsc";
import { useEffect, useState } from "react";
function Intro(props) {
  const [isMuted, setIsMuted] = useState(false);
  return (
    <div className={styles.containerIntro}>
      <ReactPlayer
        playing={true}
        lop={true}
        width="100%"
        height="100%"
        volume={1}
        muted={isMuted}
        url="https://vimeo.com/273686020"
        className={styles.videoIntro}
      />
      <div className={styles.infoIntro}>
        <h1 className={styles.headingIntro}>NETFLIX The Rain</h1>
        <p className={styles.overviewIntro}>
          Netflix Elite Launch Campaign Director: Fernanda Weinfeld Production
          Company: Awake Film Agency: Akqa
        </p>
      </div>
      {!isMuted ? (
        <VscUnmute
          className={styles.btnVolume}
          onClick={() => setIsMuted((prev) => !prev)}
        />
      ) : (
        <VscMute
          className={styles.btnVolume}
          onClick={() => setIsMuted((prev) => !prev)}
        />
      )}
      <div className={styles.fadeBottom}></div>
    </div>
  );
}
export default Intro;
