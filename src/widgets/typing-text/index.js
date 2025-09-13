import { useState, useEffect } from "react";
import styles from "./typing-text.module.css";

export default function TypingText({ text, className, speed = 60 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[i]);
      i++;
      if (i >= text.length - 1) {
        clearInterval(interval);
        setShowCursor(false);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div className={`${className}`}>
      <span>{displayedText}</span>
      {showCursor && <span className={styles.caret} />}
    </div>
  );
}
