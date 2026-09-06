import { useRef } from "react";

/**
 * Lightweight 3D tilt-on-hover effect for cards, driven by mouse position.
 * Returns event handlers to spread onto the target element.
 */
export function useTilt(strength = 10) {
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(700px) rotateX(${(-y * strength).toFixed(
      2
    )}deg) rotateY(${(x * strength).toFixed(2)}deg) translateY(-4px)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg)";
  };

  return { ref, onMouseMove, onMouseLeave };
}

export default useTilt;
