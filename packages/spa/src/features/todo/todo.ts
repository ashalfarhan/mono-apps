import { uuid } from '../../utils';
import { Todo, TodoActions } from './models';

export const initialTodos: Todo[] = [];

export const todoReducer = (todos: Todo[], action: TodoActions): Todo[] => {
  switch (action.type) {
    case 'addTodo':
      return [...todos, { id: uuid(), name: action.payload, done: false }];
    case 'removeTodo': {
      return todos.filter(todo => todo.id !== action.payload);
    }
    case 'toggleTodo': {
      return todos.map(todo => ({
        ...todo,
        done: todo.id === action.payload ? !todo.done : todo.done,
      }));
    }
    case 'resetTodo':
      return [];
    default:
      return todos;
  }
};
