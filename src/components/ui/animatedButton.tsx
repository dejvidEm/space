import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AnimatedSubscribeButtonProps {
  buttonColor: string;
  buttonTextColor?: string;
  subscribeStatus: boolean;
  initialText: React.ReactElement | string;
  changeText: React.ReactElement | string;
}

export const AnimatedSubscribeButton: React.FC<
  AnimatedSubscribeButtonProps
> = ({
  buttonColor,
  subscribeStatus,
  buttonTextColor,
  changeText,
  initialText,
}) => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(subscribeStatus);

  return (
    <AnimatePresence mode="wait">
      {isSubscribed ? (
        <motion.button
          className="relative flex w-[200px] items-center justify-center overflow-hidden rounded-md bg-white p-[8px] outline outline-1 outline-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // onClick handler is removed here to make it non-clickable once subscribed
        >
          <motion.span
            key="action"
            className="relative block h-full w-full font-semibold"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            style={{ color: buttonColor }}
          >
            {changeText}
          </motion.span>
        </motion.button>
      ) : (
        <motion.button
          className="relative flex w-[200px] cursor-pointer items-center justify-center rounded-md border-none p-[10px]"
          style={{ backgroundColor: buttonColor, color: buttonTextColor }}
          onClick={() => setIsSubscribed(true)} // Sets to true only once
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            key="reaction"
            className="relative block font-semibold"
            initial={{ x: 0 }}
            exit={{ x: 50, transition: { duration: 0.1 } }}
          >
            {initialText}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};