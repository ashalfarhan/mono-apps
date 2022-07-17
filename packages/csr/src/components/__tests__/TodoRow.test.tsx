import { expect, vi, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoRow } from '../TodoRow';

const mockTodo = {
  done: false,
  id: '',
  name: 'test todo',
};

it('should call toggle when click the text', async () => {
  const toggle = vi.fn();
  render(<TodoRow toggleTodo={toggle} todo={mockTodo} />);

  const label = screen.getByText('test todo');
  expect(label).toBeInTheDocument();
  await userEvent.click(label);
  expect(toggle).toHaveBeenCalledTimes(1);
});

it('should call delete when click the trash icon', async () => {
  const remove = vi.fn();
  render(<TodoRow toggleTodo={() => {}} todo={mockTodo} deleteTodo={remove} />);

  const deleteBtn = screen.getByRole('button', {
    name: /remove todo/i,
  });
  expect(deleteBtn).toBeInTheDocument();
  await userEvent.click(deleteBtn);
  expect(remove).toHaveBeenCalledTimes(1);
});
