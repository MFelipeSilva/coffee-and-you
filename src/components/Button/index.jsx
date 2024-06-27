import styles from "./Button.module.css";

export const PrimaryButton = ({ hidden, children, form, type }) => {
  return (
    <button
      form={form}
      type={type}
      className={`${styles.primary_button} ${hidden ? styles.hidden : ""}`}
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({ hidden, children }) => {
  return (
    <button
      className={`${styles.secondary_button} ${hidden ? styles.hidden : ""}`}
    >
      {children}
    </button>
  );
};
