import {
  Button,
  TabContent,
  TabList,
  TabPannels,
  Tabs,
  TabTrigger,
  TrashIcon,
} from '@acme/ui';
import { useReducer } from 'react';
import { TodoRow, CreateTodoForm } from './components';
import { initialTodos, Todo, todoReducer } from './features';
import styles from './App.module.css';

function App({
  initial = initialTodos,
  initialTab = 0,
}: {
  initial?: Todo[];
  initialTab?: number;
}) {
  const [todos, dispatch] = useReducer(todoReducer, initial);
  const activeTodos = todos.filter(todo => !todo.done);
  const completedTodos = todos.filter(todo => todo.done);
  return (
    <div style={{ margin: '32px 0' }}>
      <h1 className={styles.title}>#todo</h1>
      <Tabs defaultValue={initialTab}>
        <TabList>
          <TabTrigger value={0}>All</TabTrigger>
          <TabTrigger value={1}>Active</TabTrigger>
          <TabTrigger value={2}>Completed</TabTrigger>
        </TabList>
        <TabPannels>
          <TabContent value={0}>
            <CreateTodoForm
              onSubmit={payload => dispatch({ type: 'addTodo', payload })}
            />
            {activeTodos.length > 0 && (
              <ul className={styles['todo-list']} role="list">
                {activeTodos.map(todo => (
                  <TodoRow
                    key={todo.id}
                    todo={todo}
                    toggleTodo={() =>
                      dispatch({ type: 'toggleTodo', payload: todo.id })
                    }
                  />
                ))}
              </ul>
            )}
          </TabContent>
          <TabContent value={1}>
            <CreateTodoForm
              onSubmit={payload => dispatch({ type: 'addTodo', payload })}
            />
            {activeTodos.length > 0 && (
              <ul className={styles['todo-list']} role="list">
                {activeTodos.map(todo => (
                  <TodoRow
                    key={todo.id}
                    todo={todo}
                    toggleTodo={() =>
                      dispatch({ type: 'toggleTodo', payload: todo.id })
                    }
                  />
                ))}
              </ul>
            )}
          </TabContent>
          <TabContent value={2}>
            {completedTodos.length > 0 && (
              <ul className={styles['todo-list']} role="list">
                {completedTodos.map(todo => (
                  <TodoRow
                    key={todo.id}
                    todo={todo}
                    deleteTodo={() =>
                      dispatch({ type: 'removeTodo', payload: todo.id })
                    }
                    toggleTodo={() =>
                      dispatch({ type: 'toggleTodo', payload: todo.id })
                    }
                  />
                ))}
              </ul>
            )}
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Button
                onClick={() => dispatch({ type: 'resetTodo' })}
                color="danger"
                disabled={completedTodos.length === 0}
              >
                <TrashIcon width={12} height={12} />
                delete all
              </Button>
            </div>
          </TabContent>
        </TabPannels>
      </Tabs>
    </div>
  );
}

export default App;
