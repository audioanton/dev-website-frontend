"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";

export type Status = "idle" | "loading" | "success" | "failure";

export default function StatusElement({
  status: initialStatus,
}: {
  status: Status;
}) {
  const [status, setStatus] = useState<Status>(initialStatus);

  // Sync internal state with prop and handle the 2s timer
  useEffect(() => {
    setStatus(initialStatus);

    if (initialStatus !== "idle") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [initialStatus]);

  const variants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <div className="relative w-32 h-10 flex items-center justify-center overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm">
      <AnimatePresence mode="wait">
        {status === "loading" && (
          <motion.div
            key="loading"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex items-center gap-2 text-blue-600"
          >
            <Loader2 className="h-5 w-5 animate-spin" />
            <span className="text-sm font-medium">Loading</span>
          </motion.div>
        )}

        {status === "success" && (
          <motion.div
            key="success"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex items-center gap-2 text-green-600"
          >
            <CheckCircle2 className="h-5 w-5" />
            <span className="text-sm font-medium">Done</span>
          </motion.div>
        )}

        {status === "failure" && (
          <motion.div
            key="failure"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex items-center gap-2 text-red-600"
          >
            <XCircle className="h-5 w-5" />
            <span className="text-sm font-medium">Failed</span>
          </motion.div>
        )}

        {status === "idle" && (
          <motion.div
            key="idle"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-400 text-sm italic"
          >
            {/* Invisible State */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
