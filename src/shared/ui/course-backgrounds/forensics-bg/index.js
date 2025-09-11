import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./forensics-bg.module.css";

export default function ForensicsBg() {
  const cellWidth = 40;
  const lineQuantity = 8;
  const [cellQuantity, setCellQuantity] = useState(0);
  const fingerPrintsColors = ["red", "green", "gray", "white"];
  const getRandomColor = () => {
    const randomIdx = Math.floor(Math.random() * 4);
    return fingerPrintsColors[randomIdx];
  };

  const cursorRef = useRef(null);
  const wrapperRef = useRef(null);
  const activeRef = useRef(false);

  const [grid, setGrid] = useState([]);
  const [activeCell, setActiveCell] = useState(null);
  const [revealed, setRevealed] = useState({});
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // генерируем сетку один раз и при ресайзе
  useEffect(() => {
    const generateGrid = () => {
      return Array.from({ length: lineQuantity }, () =>
        Array.from({ length: cellQuantity }, () =>
          Math.random() > 0.5 ? "1" : "0"
        )
      );
    };
    setGrid(generateGrid());
  }, [cellQuantity]);

  useEffect(() => {
    const handleResize = () => {
      setCellQuantity(
        Math.floor(wrapperRef.current.clientWidth / (cellWidth * 2.2))
      );
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const follower = cursorRef.current;
    const wrapper = wrapperRef.current;
    if (!follower || !wrapper) return;

    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let x = pointerX;
    let y = pointerY;
    const ease = 0.12;

    const onPointerMove = (e) => {
      if (!activeRef.current) return;
      pointerX = e.clientX;
      pointerY = e.clientY;
    };

    const onEnter = () => {
      activeRef.current = true;
      follower.style.opacity = "1";
    };
    const onLeave = () => {
      activeRef.current = false;
      follower.style.opacity = "0";
    };

    wrapper.addEventListener("mouseenter", onEnter);
    wrapper.addEventListener("mouseleave", onLeave);
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    const lerp = (a, b, t) => a + (b - a) * t;

    function animate() {
      if (activeRef.current) {
        const t = 1 - Math.exp(-ease * 12);
        x = lerp(x, pointerX, t);
        y = lerp(y, pointerY, t);
        follower.style.transform = `translate3d(${
          x - follower.offsetWidth / 2
        }px, ${y - follower.offsetHeight / 2}px, 0)`;
      }
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    return () => {
      wrapper.removeEventListener("mouseenter", onEnter);
      wrapper.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const cells = wrapperRef.current.querySelectorAll(`.${styles.cell}`);
    const radius = 50;

    cells.forEach((cell, idx) => {
      const rect = cell.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.hypot(cx - cursorPos.x, cy - cursorPos.y);

      if (dist < radius) {
        // круг "заходит" в ячейку
        const i = Math.floor(idx / cellQuantity);
        const j = idx % cellQuantity;
        const key = `${i}-${j}`;
        setRevealed((prev) => {
          if (prev[key]) return prev;
          return {
            ...prev,
            [key]: Math.random() < 0.3 ? "svg" : "digit",
          };
        });
      }
    });
  }, [cursorPos, cellQuantity]);

  const handleEnterCell = (i, j) => {
    setActiveCell({ i, j });

    const key = `${i}-${j}`;
    setRevealed((prev) => {
      if (prev[key]) return prev;
      return {
        ...prev,
        [key]: Math.random() < 0.3 ? "svg" : "digit",
      };
    });
  };

  return (
    <>
      <div className="container">
        <div ref={wrapperRef} className={styles.wrapper}>
          {grid.map((row, i) => (
            <div key={i} className={styles.line}>
              {row.map((cell, j) => {
                const isActive = activeCell?.i === i && activeCell?.j === j;
                const key = `${i}-${j}`;
                const revealType = revealed[key];

                return (
                  <div
                    key={j}
                    onMouseEnter={() => handleEnterCell(i, j)}
                    onMouseLeave={() => setActiveCell(null)}
                    className={`${styles.cell} ${
                      isActive ? styles.active__cell : ""
                    }`}
                  >
                    {isActive && revealType === "svg" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        color={getRandomColor()}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
                        <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
                        <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
                        <path d="M2 12a10 10 0 0 1 18-6" />
                        <path d="M2 16h.01" />
                        <path d="M21.8 16c.2-2 .131-5.354 0-6" />
                        <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
                        <path d="M8.65 22c.21-.66.45-1.32.57-2" />
                        <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
                      </svg>
                    ) : (
                      cell
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div
        ref={cursorRef}
        id="cursor"
        className={styles.cursor__follower}
        aria-hidden="true"
        style={{ opacity: 0, transition: "opacity 0.3s ease" }}
      ></div>
    </>
  );
}
