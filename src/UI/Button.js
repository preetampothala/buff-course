import styles from "./Button.module.css";
const Button = ({ children, onClick, className }) => {
  const styling = className + " " + styles.button;
  return (
    <button className={styling} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
