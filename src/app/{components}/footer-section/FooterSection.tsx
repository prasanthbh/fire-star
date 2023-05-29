import styles from "./FooterSection.module.scss";
import bgImg from "assets/images/restaurant-interior.jpg";
import Image from "next/image";
import instaIcon from "assets/icons/instagram-w.png";
import fbIcon from "assets/icons/facebook-w.png";
import twitterIcon from "assets/icons/twitter-w.png";
import snapshotIcon from "assets/icons/snapchat-w.png";
import youtubeIcon from "assets/icons/youtube-play-w.png";

import React from "react";

const iconsList = [
  { id: 0, icon: instaIcon },
  { id: 1, icon: fbIcon },
  { id: 2, icon: twitterIcon },
  { id: 3, icon: snapshotIcon },
  { id: 4, icon: youtubeIcon },
];

export default function FooterSection() {
  return (
    <div className={styles.footer_section}>
      <div className={styles.stay_updated_section}>
        <Image
          src={bgImg}
          alt="bg image"
          className={styles.bg_img}
          placeholder="blur"
        />
        <div className={styles.bg_overlay} />
        <div className={styles.content}>
          <p className={styles.title}>Stay Updated with Details</p>
          <input
            type="email"
            placeholder="Email Address"
            className={styles.email}
          />
          <p className={styles.submit_button}>Submit</p>
          <div className={styles.social_icons}>
            {iconsList.map((icon) => (
              <Image
                key={icon.id}
                src={icon.icon}
                alt={`social-${icon.id}`}
                height={30}
                width={30}
              />
            ))}
          </div>
          <p className={styles.footer_title}>© 2021 RANDOM RESTAURANT</p>
          <p className={styles.footer_subtitle}>
            DEVELOPED BY Prasanth Bheemarasetty
          </p>
        </div>
      </div>
    </div>
  );
}
