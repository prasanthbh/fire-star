"use client";

import styles from "./ShotsSection.module.scss";
import React, { useRef, useEffect } from "react";
import pic1 from "assets/images/shots/pic1.jpg";
import pic2 from "assets/images/shots/pic2.jpg";
import pic3 from "assets/images/shots/pic3.jpg";
import pic4 from "assets/images/shots/pic4.jpg";
import pic5 from "assets/images/shots/pic5.jpg";
import pic6 from "assets/images/shots/pic6.jpg";
import Image from "next/image";

export default function ShotsSection() {
  /**
   * -------------------------------  Variables  -------------------------------------------------
   */
  const sectionRef = useRef<HTMLDivElement>(null);

  const imgsList = [
    { id: 0, src: pic1 },
    { id: 1, src: pic2 },
    { id: 2, src: pic3 },
    { id: 3, src: pic4 },
    { id: 4, src: pic5 },
    { id: 5, src: pic6 },
  ];

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
        // Getting sectio position with respct t viewport
        const { top, bottom } = entry.boundingClientRect;
        if (top >= 0 && bottom > window.innerHeight) {
          let ele = entry.target;
          handleSectionTransition(ele, entry.isIntersecting);
        }
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

  /**
   * **************************  Functions  *******************************
   */

  function handleSectionTransition(
    targetEle: Element,
    isIntersecting: boolean
  ) {
    // throw new Error("Function not implemented.");
    if (isIntersecting) {
      targetEle.classList.add(styles.reveal);
    } else {
      targetEle.classList.remove(styles.reveal);
    }
  }

  return (
    <div className={styles.shots_section} ref={sectionRef}>
      <p className={styles.title}>Our Shots</p>
      <div className={styles.pics_container}>
        {imgsList.map((img, key) => (
          <div key={img.id}>
            <Image src={img.src} alt={`Pic ${key.toString()}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
