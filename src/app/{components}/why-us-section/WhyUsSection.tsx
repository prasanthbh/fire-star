"use client";

import whyUsImg from "assets/images/why-us.jpg";

import styles from "./WhyUsSection.module.scss";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function WhyUsSection() {
  /**
   * **************************  Variables  ***************************
   */
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isBelowToViewport, setIsBelowToViewport] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const picRef = useRef<HTMLImageElement>(null);

  /**
   * **************************  Hooks  *******************************
   */
  //----------------------------------------------------------------

  useEffect(() => {
    /**
     * Will only ran on first component mount & unmount
     */
    // Creating the observer
    // It observes when the 30% of section is comes into view port
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);

        // Getting sectio position with respct t viewport
        const { top, bottom } = entry.boundingClientRect;
        setIsBelowToViewport(top >= 0 && bottom > window.innerHeight);
      },
      { threshold: 0.2 }
    );

    // We only observe the section if it exists,
    // which is why we check if sectionRef.current is exists before calling observer.observe.
    if (sectionRef.current) {
      // Adding the section ref to observer
      observer.observe(sectionRef.current);
    }

    // Removing the observer
    return () => observer.disconnect();
  }, []);

  //------------------------------------------------------------------
  useEffect(() => {
    /**
     * Observing the Section - Viewport interactions
     */
    // console.log(isIntersecting);
    if (isBelowToViewport) {
      if (isIntersecting) {
        //>=20% of sections comes into view port
        // When it's intersecting with viewport it is bottom of viewport (bottom to viewport -> reveal)
        detailsRef.current?.classList.add(styles["slide_in"]);
        picRef.current?.classList.add(styles["slide_in"]);
      } else {
        //>20% of section is out of viewport
        // When it's below to viewport  (viewport to bottom -> gone)
        detailsRef.current?.classList.remove(styles["slide_in"]);
        picRef.current?.classList.remove(styles["slide_in"]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntersecting]);

  //---------------------------  JSX  -----------------------------------
  return (
    <div className={styles.why_us_section} ref={sectionRef}>
      <div className={styles.details} ref={detailsRef}>
        <p className={styles.section_title}>Why Us</p>
        <p className={styles.title}>The Taste of India</p>
        <p className={styles.description}>
          Experience the tantalizing flavors of India with our authentic and
          diverse menu. Our warm and welcoming atmosphere, exceptional service,
          and affordable pricing make for a memorable dining experience. Let us
          cater your next special occasion with a customized menu to suit your
          taste and budget. Choose us for the ultimate taste of India.
        </p>
        <p className={styles.call_to_action_but}>About Us</p>
      </div>
      <Image
        className={styles.pic}
        src={whyUsImg}
        alt="why us girl"
        ref={picRef}
        placeholder="blur"
        loading="eager"
      />
    </div>
  );
}
