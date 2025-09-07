import React, { useEffect, useState } from "react";

export default function GlitchCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [lagPos, setLagPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);

    // "баги" курсора: дергается и слегка отстает
    const interval = setInterval(() => {
      setLagPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.2,
        y: prev.y + (pos.y - prev.y) * 0.2,
      }));
    }, 0);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      clearInterval(interval);
    };
  }, [pos]);

  return (
    <div
      style={{
        position: "fixed",
        top: lagPos.y,
        left: lagPos.x,
        width: "24px",
        height: "24px",
        background: "rgba(255,0,0,0.7)",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 9999,
        boxShadow: "0 0 10px red, 0 0 20px rgba(255,0,0,0.5)",
        transition: "transform 0.1s ease-out",
      }}
    />
  );
}