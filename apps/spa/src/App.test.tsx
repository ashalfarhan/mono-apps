import userEvent from '@testing-library/user-event';
import { render, screen, within } from '@testing-library/react';
import { expect, vi } from 'vitest';
import App from './App';

vi.mock('@acme/common', () => ({
  AcmeStorage: {
    set: vi.fn(),
    get: vi.fn().mockImplementation((_key, arg) => arg),
  },
}));

it('should success add todo', async () => {
  render(<App />);
  const panel = screen.getByRole('tabpanel', {
    name: /all/i,
  });
  const allTodosTab = within(panel);

  const input = allTodosTab.getByPlaceholderText(/add details?/i);
  await userEvent.type(input, 'test todo one');
  expect(input).toHaveValue('test todo one');

  const addBtn = allTodosTab.getByRole('button', {
    name: /add/i,
  });
  await userEvent.click(addBtn);

  const result = screen.getByRole('checkbox', {
    name: /test todo one/i,
  });
  expect(result).toBeInTheDocument();
  expect(result).not.toBeChecked();
});

const mockTodo = {
  id: '1',
  name: 'test todo',
  done: true,
};

it('should success toggle todo', async () => {
  render(
    <App initial={[mockTodo, { id: '2', name: 'test todo 2', done: true }]} />
  );
  const target = screen.getByRole('checkbox', {
    name: /^test todo$/i,
  });
  expect(target).toBeChecked();
  await userEvent.click(target);
  expect(target).not.toBeChecked();
});

it('should success remove todo', async () => {
  render(
    <App
      initial={[mockTodo, { id: '2', name: 'test todo 2', done: true }]}
      initialTab={2}
    />
  );
  const target = screen.getByRole('listitem', {
    name: /test todo 2/i,
  });
  const removeBtn = within(target).getByRole('button', {
    name: /remove todo/i,
  });
  await userEvent.click(removeBtn);
  expect(target).not.toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(1);
});

it('should success reset todo', async () => {
  render(
    <App
      initial={[mockTodo, { id: '2', name: 'test todo 2', done: true }]}
      initialTab={2}
    />
  );
  const resetBtn = screen.getByRole('button', {
    name: /delete all/i,
  });
  await userEvent.click(resetBtn);
  expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
});
