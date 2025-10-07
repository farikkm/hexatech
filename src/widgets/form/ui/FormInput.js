import styles from "../styles/form-input.module.css";

export default function FormInput({ type, placeholder, name, error, ...rest }) {
  return (
    <div>
      <input
        name={name}
        id={name}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
      {error && (
        <p
          className={styles.error__message}
          style={{ color: "red", fontSize: "14px" }}
        >
          {error.message}
        </p>
      )}
    </div>
  );
}
