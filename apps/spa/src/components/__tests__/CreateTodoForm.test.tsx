import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, it, vi } from 'vitest';
import { CreateTodoForm } from '../CreateTodoForm';

it('should disable add button if input empty', () => {
  render(<CreateTodoForm onSubmit={() => void 0} />);
  const addBtn = screen.getByRole('button', {
    name: /add/i,
  });
  expect(addBtn).toBeDisabled();
});

it('should success add todo', async () => {
  const submit = vi.fn();
  render(<CreateTodoForm onSubmit={submit} />);

  const input = screen.getByRole('textbox');
  await userEvent.type(input, 'test todo one');
  expect(input).toHaveValue('test todo one');

  const addBtn = screen.getByRole('button', {
    name: /add/i,
  });
  await userEvent.click(addBtn);
  expect(submit).toHaveBeenCalledWith('test todo one');
});
