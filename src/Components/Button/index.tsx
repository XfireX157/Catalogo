import { IButton } from "../../Types/IButton";
import styles from "./Button.module.scss";

export default function Button({ type, children, onClick }: IButton) {
  return (
    <button type={type} onClick={onClick} className={styles.Button}>
      {children}
    </button>
  );
}
