import styles from './modal_overlay.module.css';

export const ModalOverlay = ({ onClick }: { onClick: () => void }) => (
  <div className={styles.overlay} onClick={onClick} />
);
