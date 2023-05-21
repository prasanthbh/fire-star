"use client"

import { useDispatch } from "react-redux";
import { TfiClose } from "react-icons/tfi";
import { responsiveDrawerActions } from "components/external/responsive-drawer/store";

import styles from "./MainDrawerBody.module.scss";

export default function MainDrawerBody() {
  const dispatch = useDispatch();
  return (
    <div className={styles.main}>
      <TfiClose
        className={styles.close_icon}
        size={30}
        onClick={() => {
          dispatch(responsiveDrawerActions.toggleDrawer());
        }}
      />
      <div className={styles.menu_holder}>
        <div className={styles.menu_block}>
          <p className={styles.menu_name}>Home</p>
        </div>
        <div className={styles.menu_block}>
          <p className={styles.menu_name}>Menu</p>
        </div>
        <div className={styles.menu_block}>
          <p className={styles.menu_name}>About</p>
        </div>
        <div className={styles.menu_block}>
          <p className={styles.menu_name}>Contact</p>
        </div>
      </div>
    </div>
  );
}
