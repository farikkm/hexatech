import { motion } from "framer-motion";
import styles from "./loader.module.css";

export default function Loader() {
  return (
    <motion.div
      key="loader"
      className={styles.loader__screen}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.img
        src="/icons/favicon.svg"
        alt="hexatech-logo"
        className={styles.loader__logo}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
