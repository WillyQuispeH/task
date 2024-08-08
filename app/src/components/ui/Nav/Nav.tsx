"use client";
import { useTask } from "@/store/hooks";
import styles from "./Nav.module.scss";
import React from "react";
import { defaultSchedule } from "@/components/funtional/Routine/data";
import { useRouter } from "next/navigation";

const Nav = () => {
  const { setModalNew, setSchedules } = useTask();
  const router = useRouter();
  return (
    <div className={styles.containerBtn}>
      <div className={styles.nav}>
        <span
          className={`material-symbols-outlined ${styles.buttonAdd}`}
          onClick={() => {
            router.push("/");
          }}
        >
          construction
        </span>

        <span
          className={`material-symbols-outlined ${styles.buttonAdd}`}
          onClick={() => {
            router.push("/routine");
          }}
        >
          manage_accounts
        </span>
      </div>
      <div className={styles.accion}>
        <span
          className={`material-symbols-outlined ${styles.buttonSave}`}
          onClick={() => {
            setSchedules(defaultSchedule);
          }}
        >
          refresh
        </span>

        <span
          className={`material-symbols-outlined ${styles.buttonSave}`}
          onClick={() => {
            setModalNew(true);
          }}
        >
          add
        </span>
      </div>
    </div>
  );
};

export default Nav;
