import styles from "./ToolItem.module.scss";
import ToolItemForm from "./ToolItemForm";

const ToolItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={styles.tool}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <ToolItemForm />
      </div>
    </li>
  );
};

export default ToolItem;
