import { InputProps } from "../../Types/Input";
import styles from "./Input.module.scss";

export default function Input({
  value,
  type,
  onChange,
  placeholder,
  id,
  name
}: InputProps) {
  return (
    <input
      id={id}
      className={styles.Input}
      type={type}
      value={value}
      placeholder={placeholder}
      name={name}
      onChange={(e) => onChange(e)}
    />
  );
}
