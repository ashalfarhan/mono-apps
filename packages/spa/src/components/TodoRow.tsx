import { styled, TrashIcon } from '@acme/ui';
import { Todo } from '../features/todo';

type TodoRowProps = {
  todo: Todo;
  toggleTodo: () => void;
  deleteTodo?: () => void;
};

const StyledText = styled('span', {
  fontSize: 18,
  variants: {
    done: {
      true: {
        textDecoration: 'line-through',
      },
    },
  },
});

const StyledLabel = styled('label', {
  display: 'flex',
  alignItems: 'center',
  gap: 7,
});

const StyledInput = styled('input', {
  width: 18,
  height: 18,
});

const StyledDeleteButton = styled('button', {
  backgroundColor: 'transparent',
  border: 'none',
  marginLeft: 'auto',
  cursor: 'pointer',
});

export const TodoRow = ({ todo, toggleTodo, deleteTodo }: TodoRowProps) => {
  return (
    <StyledLabel role="listitem" aria-label={todo.name}>
      <StyledInput
        type="checkbox"
        onChange={toggleTodo}
        checked={todo.done}
        aria-checked={todo.done}
      />
      <StyledText done={todo.done}>{todo.name}</StyledText>
      {deleteTodo && (
        <StyledDeleteButton
          type="button"
          onClick={deleteTodo}
          aria-label="remove todo"
        >
          <TrashIcon width={20} height={20} />
        </StyledDeleteButton>
      )}
    </StyledLabel>
  );
};
