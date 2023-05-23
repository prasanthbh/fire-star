"use client";

import { useEffect, useRef } from "react";
import styles from "./ServicesSection.module.scss";
import dineInIcon from "assets/icons/salad-white.png";
import takeoutIcon from "assets/icons/delivery.png";
import cateringIcon from "assets/icons/bell-service.png";
import Image from "next/image";

export default function ServicesSection() {
  /**
   * **************************  Variables  ***************************
   */
  const sectionRef = useRef<HTMLDivElement>(null);
  const serviceCard1Ref = useRef<HTMLDivElement>(null);
  const serviceCard2Ref = useRef<HTMLDivElement>(null);
  const serviceCard3Ref = useRef<HTMLDivElement>(null);

  // Data
  const servicesList = [
    {
      id: "1",
      ref: serviceCard1Ref,
      icon: dineInIcon,
      service_title: "Dine-in service",
      description:
        "Our restaurant offers a comfortable and welcoming atmosphere, attentive service, and a menu that showcases the rich and diverse flavors of India.",
    },
    {
      key: "2",
      ref: serviceCard2Ref,
      icon: takeoutIcon,
      service_title: "Takeout Service",
      description:
        "Enjoy our delicious food from the comfort of your own home or on-the-go! Our takeout service allows you to order your favorite Indian dishes over the phone or online and pick them up at our restaurant.",
    },
    {
      key: "3",
      icon: cateringIcon,
      ref: serviceCard3Ref,
      service_title: "Catering Service",
      description:
        "Let us cater your next event and impress your guests with our authentic Indian cuisine! Our catering service provides a customized menu that suits your event's theme and budget.",
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
            /**
             * Can be merged both handle* functions and that function can be called instead of switch.
             * Because same animations are applied to both section & cards.
             * But it implememnted this way so that if we want different animations we can follow this implementation
             */
            switch (ele.id) {
              case "0":
                handleSectionTransition(ele, entry.isIntersecting);
                break;
              default:
                handleSectionCardTransition(ele, entry.isIntersecting);
                break;
            }
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
    observer.observe(serviceCard1Ref.current!!);
    observer.observe(serviceCard2Ref.current!!);
    observer.observe(serviceCard3Ref.current!!);

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

  function handleSectionCardTransition(
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
    <div className={styles.services_section} ref={sectionRef} id="0">
      <p className={styles.section_title}>Explore</p>
      <p className={styles.title}>Our Services</p>
      <div className={styles.services_container}>
        {servicesList.map((service, key) => (
          <div
            className={styles.service_card}
            ref={service.ref}
            id={service.id}
            key={key}
          >
            <Image
              src={service.icon}
              alt="service-icon"
              className={styles.service_icon}
              placeholder="blur"
            />
            <p className={styles.service_title}>{service.service_title}</p>
            <p className={styles.service_description}>{service.description}</p>
          </div>
        ))}
      </div>
      <p className={styles.menu_call_to_action_but}>See Menu</p>
    </div>
  );
}
