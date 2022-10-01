import { Button, TrashIcon } from '@acme/ui';
import clsx from 'clsx';
import { Todo } from '../features';
import styles from './TodoRow.module.css';

type TodoRowProps = {
  todo: Todo;
  toggleTodo: () => void;
  deleteTodo?: () => void;
};

export const TodoRow = ({ todo, toggleTodo, deleteTodo }: TodoRowProps) => {
  return (
    <li className={styles.row} role="listitem" aria-label={todo.name}>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="checkbox"
          onChange={toggleTodo}
          checked={todo.done}
          aria-checked={todo.done}
        />
        <span
          className={clsx(styles.text, { [styles['text-done']]: todo.done })}
        >
          {todo.name}
        </span>
      </label>
      {deleteTodo && (
        <Button
          type="button"
          onClick={deleteTodo}
          aria-label="remove todo"
          variant="text"
          color="secondary"
          style={{ padding: 4 }}
        >
          <TrashIcon width={20} height={20} />
        </Button>
      )}
    </li>
  );
};
