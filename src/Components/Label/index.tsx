import { ILabel } from "../../Types/Label";
import styles from "./Label.module.scss";

export default function Label({ children, id, props }: ILabel) {
  return (
    <label
      className={styles.Label}
      id={id}
      style={{
        backgroundColor: `${props?.color}`,
        alignItems: `${props?.alignItems}`,
        height: `${props?.height === true ? "160px" : "100%"}`,
        boxShadow: `${props?.boxShadow}`
      }}
    >
      {children}
    </label>
  );
}
