import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./Header.module.css";
import ToDoLogo from "./Logo.svg";
import plus from "./plus.svg";

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={ToDoLogo} alt="Logotipo" />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input
          placeholder="Adicione uma nova tarefa"
          onChange={onChangeTitle}
          value={title}
        />
        <button>
          Criar
          <img src={plus} alt="Sinal de mais" />
        </button>
      </form>
    </header>
  );
}
