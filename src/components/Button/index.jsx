import styles from "./Button.module.css";

export const PrimaryButton = ({ hidden, children, form, type, onClick }) => {
  return (
    <button
      form={form}
      type={type}
      onClick={onClick}
      className={`${styles.primary_button} ${hidden ? styles.hidden : ""}`}
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({ hidden, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.secondary_button} ${hidden ? styles.hidden : ""}`}
    >
      {children}
    </button>
  );
};
