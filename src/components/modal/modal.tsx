import { memo, useEffect, type FC, type ReactNode } from "react";
import { createPortal } from "react-dom";
import styles from './modal.module.css';
import { ModalOverlay } from "../modalOverlay/modalOverlay";
import { Button } from "../button/button";

type ModalProps = {
  title: string;
  onClose: () => void;
  children?: ReactNode;
};

const modalRoot = document.getElementById("modals");

export const Modal: FC<ModalProps> = memo(({ title, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const modalContent = (
    <>
      <div className={styles.modal}>
          <h3 className={styles.title}>
            {title}
          </h3>
          <Button onClick={onClose}>Закрыть</Button>
        <div>{children}</div>
      </div>
      <ModalOverlay onClick={onClose} />
    </>
  );
  return createPortal(modalContent, modalRoot as HTMLDivElement);
});
