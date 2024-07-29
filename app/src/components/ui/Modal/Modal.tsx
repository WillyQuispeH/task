import { ReactNode } from "react";
import styles from "./Modal.module.scss";

interface IntOverlay {
  children: ReactNode;
  active: boolean;
}

interface IModal {
  children: ReactNode;
  childrenFooter?: ReactNode;
  title: string;
  onClick: () => void;
}

const Overlay = ({ children, active }: IntOverlay) => {
  return (
    <div
      className={styles.overlay}
      style={{ display: active ? "flex" : "none" }}
    >
      {children}
    </div>
  );
};

const Modal = ({ children, childrenFooter, title, onClick }: IModal) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalTitle}>
        <h1>{title}</h1>
        <button onClick={onClick}>
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
      <div className={styles.modalBody}>{children}</div>
      <div className={styles.modalFooter}>
        <button className={styles.buttonClose} onClick={onClick}>
          Cerrar
        </button>
        {childrenFooter}
      </div>
    </div>
  );
};

export { Overlay, Modal };
