import styles from "./Task.module.css";
import trashIcon from "../../assets/trashdefault.svg";
import { ITask } from "../../App";
import checkedIcon from "../../assets/Checked=trueHover=false.svg";
import checkedIconFalse from "../../assets/Checked=falseHover=false.svg";

interface Props {
  task: ITask;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Task({ task, onDelete, onComplete }: Props) {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        title="Button"
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? (
          <img src={checkedIcon} alt="checked" />
        ) : (
          <img src={checkedIconFalse} alt="checkedFalse" />
        )}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>

      <button
        className={styles.deleteButton}
        title="deleteButton"
        onClick={() => onDelete(task.id)}
      >
        <img src={trashIcon} alt="trashIcon" />
      </button>
    </div>
  );
}
