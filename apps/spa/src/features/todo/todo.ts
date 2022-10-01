import { uuid, Todo, AcmeStorage } from '@acme/common';
import { TodoActions } from './models';

export const initialTodos: Todo[] = [];

export const todoReducer = (todos: Todo[], action: TodoActions): Todo[] => {
  switch (action.type) {
    case 'addTodo': {
      const newTodos = [
        ...todos,
        { id: uuid(), name: action.payload, done: false },
      ];
      AcmeStorage.set('todos', newTodos);
      return newTodos;
    }
    case 'removeTodo': {
      const newTodos = todos.filter(todo => todo.id !== action.payload);
      AcmeStorage.set('todos', newTodos);
      return newTodos;
    }
    case 'toggleTodo': {
      const newTodos = todos.map(todo => ({
        ...todo,
        done: todo.id === action.payload ? !todo.done : todo.done,
      }));
      AcmeStorage.set('todos', newTodos);
      return newTodos;
    }
    case 'resetTodo':
      AcmeStorage.set('todos', []);
      return [];
    default:
      return todos;
  }
};

export const todoInitializer = (defaultState: Todo[]) => {
  return AcmeStorage.get('todos', defaultState);
};
