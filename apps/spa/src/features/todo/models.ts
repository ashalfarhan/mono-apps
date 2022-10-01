export type Todo = {
  id: string;
  name: string;
  done: boolean;
};

export type TodoActions =
  | {
      type: 'addTodo';
      /**
       * Todo name
       */
      payload: string;
    }
  | {
      type: 'removeTodo';
      /**
       * Todo id
       */
      payload: string;
    }
  | {
      type: 'toggleTodo';
      /**
       * Todo id
       */
      payload: string;
    }
  | {
      type: 'resetTodo';
    };
