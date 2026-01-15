import { useEffect } from "react";
import { motion, useMotionValue, animate, useTransform } from "framer-motion";

const CountUp = ({ value, isInView, duration = 1.5 }) => {
  const count = useMotionValue(0);

  // transform motion value → rounded number
  const rounded = useTransform(count, (latest) =>
    Math.floor(latest)
  );

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [isInView, value, duration, count]);

  return <motion.span>{rounded}</motion.span>;
};

export default CountUp;
