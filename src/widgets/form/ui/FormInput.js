import styles from "./form-input.module.css";

export default function FormInput({
  type,
  placeholder,
  name,
  required = true,
}) {
  return (
    <input
      name={name}
      id={name}
      className={styles.input}
      type={type}
      placeholder={placeholder}
      required={required}
    />
  );
}
