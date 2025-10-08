import React, { useRef, useState, useEffect } from "react";
import styles from "./limited-text.module.css";

const LimitedText = ({ text, classes, maxHeight = 140 }) => {
  const textRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      setIsOverflowing(el.scrollHeight > el.clientHeight);
    }
  }, [text]);

  return (
    <div className={`${classes} ${styles.wrapper}`}>
      <div
        ref={textRef}
        className={styles.content}
        style={{ height: `${maxHeight}px` }}
      >
        {text}
      </div>

      {/* {isOverflowing && <span className={styles.ellipsis}>...</span>} */}
    </div>
  );
};

export default LimitedText;
