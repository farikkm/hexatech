import styles from "./cybersecurity-course-bg.module.css";
import TypingText from "@/widgets/typing-text";

const LINES = [
  "> : connecting to target system...",
  "> : initializing ethical hacking session...",
  "> : simulating complete - system safe",
  "> : security protocols detected",
];

export default function CybersecurityCourseBg() {
  return (
    <div className={`${styles.wrapper} transition-mask`}>
      <img
        className={styles.img}
        src="/images/course/cybersecurity-bg.jpg"
        alt="cybersecurity-bg"
      />

      <div className={styles.lines__wrapper}>
        <div className="container">
          <TypingText
            text=">  : connecting to target system..."
            className={`${styles.line} ${styles.line__1}`}
          />
          <TypingText
            text=">  : initializing ethical hacking session..."
            className={`${styles.line} ${styles.line__2}`}
          />
          <TypingText
            text=">  : simulating complete - system safe"
            className={`${styles.line} ${styles.line__3}`}
          />
          <TypingText
            text=">  : security protocols detected"
            className={`${styles.line} ${styles.line__4}`}
          />
        </div>
      </div>
    </div>
  );
}
