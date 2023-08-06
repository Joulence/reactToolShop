import Card from "../UI/Card";
import styles from "./AvailableTools.module.scss";
import ToolItem from "./ToolItem/ToolItem";

const DUMMY_TOOLS = [
  {
    id: "t1",
    name: "Screwdriver",
    description: "A tool used to turn screws",
    price: 10,
  },
  {
    id: "t2",
    name: "Wrench",
    description: "A tool used to turn nuts and bolts",
    price: 15,
  },
  {
    id: "t3",
    name: "Hammer",
    description: "A tool used to pound nails",
    price: 10,
  },
  {
    id: "t4",
    name: "Pliers",
    description: "A tool used to grip and hold objects",
    price: 12,
  },
  {
    id: "t5",
    name: "Saw",
    description: "A tool used to cut through wood, metal, or other materials.",
    price: 20,
  },
  {
    id: "t6",
    name: "Drill",
    description:
      "A tool used to create holes in wood, metal, or other materials.",
    price: 30,
  },
  {
    id: "t7",
    name: "Sander",
    description: "A tool used to smooth surfaces.",
    price: 25,
  },
  {
    id: "t8",
    name: "Level",
    description: "A tool used to measure whether a surface is level.",
    price: 15,
  },
];

const AvailableTools = () => {
  return (
    <section className={styles.tools}>
      <Card>
        <ul>
          {DUMMY_TOOLS.map((tool) => (
            <ToolItem
              key={tool.id}
              name={tool.name}
              description={tool.description}
              price={tool.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableTools;
