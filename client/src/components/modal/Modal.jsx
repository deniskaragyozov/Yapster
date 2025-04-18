import styles from './modal.module.css';

export default function Modal({ children, isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                {children}
            </div>
        </div>
    );
}