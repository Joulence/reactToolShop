import styles from "./ToolItemForm.module.scss";

const ToolItemForm = (props) => {
  return (
    <form className={styles.form}>
      <input type="text" />
      <button>+ Add</button>
    </form>
  );
};

export default ToolItemForm;
