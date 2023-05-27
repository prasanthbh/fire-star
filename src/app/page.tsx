"use client";

import heroVid from "assets/videos/hero-vid.mp4";
import iconImg from "assets/icons/fire.png";
import styles from "./page.module.scss";

import { useDispatch, useSelector } from "react-redux";
import {
  ResponsiveDrawerStateType,
  responsiveDrawerActions,
} from "components/external/responsive-drawer/store";
import { CiMenuFries } from "react-icons/ci";
import WhyUsSection from "./{components}/why-us-section/WhyUsSection";
import ServicesSection from "./{components}/services-section/ServicesSection";
import CustomersSection from "./{components}/customers-section/CustomersSection";
import Image from "next/image";
import ShotsSection from "./{components}/shots-section/ShotsSection";
import FooterSection from "./{components}/footer-section/FooterSection";

export default function RootPage() {
  // Variables
  const dispatch = useDispatch();
  let isDrawerBreakpointExceeded = useSelector(
    (state: ResponsiveDrawerStateType) => state.isBreakpointExceeded
  );
  /**
   * JSX
   */
  return (
    <div className={styles.container}>
      {/**
       * *****************  Part 1: Hero section   ******************************************
       */}
      <div className={styles.hero_section}>
        {/**
         * Background Layer
         */}
        <div className={styles.hero_bg_layer}>
          {/* <img className={styles["hero_img"]} src={heroImg} alt="main_pic" /> */}
          {/**
           * BG Video
           */}
          <video
            autoPlay
            muted
            loop
            className={styles.hero_bg_vid}
            src={heroVid}
          >
            <source src={heroVid} type="video/mp4" />
          </video>
          {/**
           * Bg Overlay
           */}
          <div className={styles.bg_overlay} />
        </div>
        {/**
         * Forground Layer
         */}
        <div className={styles.hero_fg_layer}>
          <div className={styles.hero_top_section}>
            <div className={styles.brand_section}>
              <Image
                className={styles.icon}
                src={iconImg}
                alt="Brand Icon"
                placeholder="blur"
              />
              <p className={styles.name}>FIRE STAR</p>
            </div>
            <CiMenuFries
              className={styles.drawer_menu_icon}
              size={30}
              strokeWidth={1}
              display={isDrawerBreakpointExceeded ? "none" : "block"}
              onClick={() => {
                dispatch(responsiveDrawerActions.toggleDrawer());
              }}
            />
            <div
              className={styles.top_menu}
              hidden={isDrawerBreakpointExceeded ? false : true}
            >
              <a className={styles.menu_item} href="/">
                HOME
              </a>
              <a className={styles.menu_item} href="/">
                MENU
              </a>
              <a className={styles.menu_item} href="/">
                ABOUT
              </a>
              <a className={styles.menu_item} href="/">
                CONTACT
              </a>
            </div>
          </div>
          <div className={styles.hero_text_block}>
            <p className={styles.title}>DELICIOUS & SPICY FOOD</p>
            <p className={styles.sub_title}>
              Experience the fiery taste of India at our restaurant.
            </p>
            <p className={styles.call_to_action_but}>ORDER ONLINE</p>
          </div>
        </div>
      </div>
      {/**
       * ***************** Part 2: Why section   **************************************
       */}
      <WhyUsSection />

      {/**
       * **************** Part 3 : Services Section  ***************************************
       */}
      <ServicesSection />

      {/**
       * *************** Part 4 : Customers section  ****************************************
       */}
      <CustomersSection />

      {/**
       * *************** Part 5 : Shots Section *********************************************
       */}
      <ShotsSection />

      {/**
       * *************** Part 6 : Footer Section *********************************************
       */}
      <FooterSection />
    </div>
  );
}
