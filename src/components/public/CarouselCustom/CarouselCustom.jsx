"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";

import HireMentorCard from "../HireMentorCard/HireMentorCard";

import PropTypes from "prop-types";
import RegisterCourseCard from "../RegisterCourseCard/RegisterCourseCard";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

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

const RenderCardWithCondition = ({ type, cardData, index }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (type === "mentor") {
    return (
      <m.div
        key={index}
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        custom={index}
        whileHover={isMobile ? "hoverInMobile" : "hoverInDesktop"}
      >
        <HireMentorCard index={index} cardData={cardData} />
      </m.div>
    );
  } else if (type === "course") {
    return (
      <m.div
        key={index}
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        whileHover={isMobile ? "hoverInMobile" : "hoverInDesktop"}
        viewport={{ once: true }}
        custom={index}
      >
        <RegisterCourseCard index={index} cardData={cardData} />
      </m.div>
    );
  }
};

const CarouselCustom = ({ carouselData }) => {
  return (
    <div className="mb-10">
      <m.h1
        className="text-3xl font-bold underline sm:ml-9 mb-6"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {carouselData.title}
      </m.h1>
      <Carousel responsive={responsive}>
        {carouselData.arrayData.map((item, index) => (
          <RenderCardWithCondition
            key={item.id}
            index={index}
            type={carouselData.type}
            cardData={item}
          />
        ))}
      </Carousel>
    </div>
  );
};

CarouselCustom.propTypes = {
  carouselData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    arrayData: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default CarouselCustom;
