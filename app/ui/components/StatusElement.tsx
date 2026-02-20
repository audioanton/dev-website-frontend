"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type Status = "idle" | "loading" | "success" | "failure";

export default function StatusElement({
  status: initialStatus,
  styles,
  divStyles,
}: {
  status: Status;
  styles: string;
  divStyles: string;
}) {
  const [status, setStatus] = useState<Status>(initialStatus);

  const outlineDark =
    "[text-shadow:_1px_1px_1_#000,_-1px_-1px_1_#000,_1px_-1px_1_#000,_-1px_1px_1_#000]";

  useEffect(() => {
    setStatus(initialStatus);

    if (initialStatus !== "idle") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [initialStatus]);

  const variants = {
    initial: { opacity: 0, scale: 0.0 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.0 },
  };

  return (
    <div
      className={`flex items-center justify-center uppercase text-2xl md:text-3xl ${divStyles}`}
    >
      <AnimatePresence mode="wait">
        {status === "loading" && (
          <motion.div
            key="loading"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles}
          >
            <span className={`${styles} ${outlineDark}`}>sending</span>
          </motion.div>
        )}

        {status === "success" && (
          <motion.div
            key="success"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`${styles} ${outlineDark} text-green-500`}
          >
            <span className="">message sent</span>
          </motion.div>
        )}

        {status === "failure" && (
          <motion.div
            key="failure"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`${styles} ${outlineDark} text-red-500`}
          >
            <span className="">message failed</span>
          </motion.div>
        )}

        {status === "idle" && (
          <motion.div
            key="idle"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Invisible State */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
