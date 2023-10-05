"use client"

import { motion as m } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.5,
    },
  }),
  hoverInDesktop: {
    y: -10,
  },
  hoverInMobile: {
    y: 0,
  },
};

const SlideUpCardAnimation = ({ children, key }) => {
  return (
    <m.div
      key={key}
      whileHover={{y:- 10}}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      custom={key}
      viewport={{ once: true }}
    >
      {children}
    </m.div>
  );
};

export default SlideUpCardAnimation;
