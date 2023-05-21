"use client";

import { useEffect, useRef } from "react";
import styles from "./CustomersSection.module.scss";
import quoteIcon from "assets/icons/quote-end.png";

import customer1Image from "assets/images/customer1.jpg";
import customer2Image from "assets/images/customer2.jpg";
import customer3Image from "assets/images/customer3.jpg";
import Image from "next/image";

export default function CustomersSection() {
  /**
   * **************************  Variables  ***************************
   */
  const sectionRef = useRef<HTMLDivElement>(null);
  const review1Ref = useRef<HTMLDivElement>(null);
  const review2Ref = useRef<HTMLDivElement>(null);
  const review3Ref = useRef<HTMLDivElement>(null);

  // Data
  const reviewsList = [
    {
      ref: review1Ref,
      icon: quoteIcon,
      description:
        "The food was amazing! The flavors were authentic and delicious. I especially loved the spice level - it was just right for me. The service was exceptional and the atmosphere was cozy and welcoming. Can't wait to come back again!",
      name: "John D",
      customer_pic: customer1Image,
    },
    {
      ref: review2Ref,
      icon: quoteIcon,
      description:
        "I had the pleasure of dining at this restaurant for a friend's birthday, and I was blown away by the quality of the food and service. The menu had a great selection of vegetarian options, which was perfect for me. Highly recommend!",
      name: "Sarah B",
      customer_pic: customer2Image,
    },
    {
      ref: review3Ref,
      icon: quoteIcon,
      description:
        "If you're looking for the ultimate Indian dining experience, this is the place to be! The food was so flavorful and authentic, I felt like I was transported to India. The service was top-notch, and the staff were so friendly and welcoming. ",
      name: "Mark T",
      customer_pic: customer3Image,
    },
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
      (entries) => {
        entries.forEach((entry) => {
          // Getting sectio position with respct t viewport
          const { top, bottom } = entry.boundingClientRect;
          if (top >= 0 && bottom > window.innerHeight) {
            let ele = entry.target;
            handleSectionTransition(ele, entry.isIntersecting);
          }
        });
      },
      { threshold: 0.2 }
    );

    // We only observe the section if it exists,
    // which is why we check if sectionRef.current is exists before calling observer.observe.
    if (sectionRef.current) {
      // Adding the section ref to observer
      observer.observe(sectionRef.current);
    }

    // Same for service cards
    observer.observe(review1Ref.current!!);
    observer.observe(review2Ref.current!!);
    observer.observe(review3Ref.current!!);

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

  /**
   * **************************  JSX  *******************************
   */
  return (
    <div className={styles.customers_section} ref={sectionRef} id="0">
      <p className={styles.title}>Our Customers</p>
      <div className={styles.reviews_container}>
        {reviewsList.map((review, key) => (
          <div className={styles.review_card} ref={review.ref} key={key}>
            <Image
              src={review.customer_pic}
              alt="customers"
              className={styles.bg_image}
            />
            <div className={styles.overlay} />
            <div className={styles.card_details}>
              <Image
                src={review.icon}
                alt="service-icon"
                className={styles.quote_icon}
              />
              <p className={styles.review}>{review.description}</p>
              <p className={styles.name}>- {review.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
