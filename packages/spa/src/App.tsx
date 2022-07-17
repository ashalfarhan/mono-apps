import {
  styled,
  TabContent,
  TabList,
  TabPannels,
  Tabs,
  TabTrigger,
  TrashIcon,
} from '@acme/ui';
import { useReducer } from 'react';
import { TodoRow, CreateTodoForm } from './components';
import { initialTodos, Todo, todoReducer } from './features/todo';

const Title = styled('h1', {
  fontSize: 36,
  textAlign: 'center',
  fontFamily: '$raleway',
  letterSpacing: '-4.5%',
  marginBottom: 32,
});

const AppShell = styled('div', {
  margin: '32px 0',
});

const TodoList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  marginTop: 26,
});

const ResetButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  backgroundColor: '$danger',
  color: 'White',
  padding: '12px 24px',
  display: 'inline-flex',
  gap: 3,
  alignItems: 'center',
  borderRadius: 4,
  marginLeft: 'auto',
});

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
    <AppShell>
      <Title>#todo</Title>
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
            <TodoList role="list">
              {todos.map(todo => (
                <TodoRow
                  key={todo.id}
                  todo={todo}
                  toggleTodo={() =>
                    dispatch({ type: 'toggleTodo', payload: todo.id })
                  }
                />
              ))}
            </TodoList>
          </TabContent>
          <TabContent value={1}>
            <CreateTodoForm
              onSubmit={payload => dispatch({ type: 'addTodo', payload })}
            />
            <TodoList role="list">
              {activeTodos.map(todo => (
                <TodoRow
                  key={todo.id}
                  todo={todo}
                  toggleTodo={() =>
                    dispatch({ type: 'toggleTodo', payload: todo.id })
                  }
                />
              ))}
            </TodoList>
          </TabContent>
          <TabContent value={2}>
            <TodoList role="list">
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
            </TodoList>
            <div style={{ display: 'flex', marginTop: 32 }}>
              <ResetButton onClick={() => dispatch({ type: 'resetTodo' })}>
                <TrashIcon width={12} height={12} />
                delete all
              </ResetButton>
            </div>
          </TabContent>
        </TabPannels>
      </Tabs>
    </AppShell>
  );
}

export default App;
