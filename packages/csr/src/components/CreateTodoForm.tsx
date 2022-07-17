import { styled } from '@acme/ui';
import { FormEvent, useState } from 'react';

const StyledInput = styled('input', {
  flex: 1,
  padding: '20px 12px',
  borderRadius: 12,
  border: '1px solid $secondary',
  fontSize: 14,
  '&:focus': { outline: '1px solid $secondary' },
  fontFamily: 'inherit',
});

const StyledButton = styled('button', {
  padding: '20px 40px',
  fontSize: 14,
  borderRadius: 12,
  backgroundColor: '$primary',
  border: 'none',
  cursor: 'pointer',
  color: 'White',
  fontFamily: 'inherit',
  filter: 'drop-shadow(0 2px 6px #7FB1F366)',
});

type CreateTodoFormProps = {
  onSubmit: (value: string) => void;
};

export const CreateTodoForm = ({ onSubmit }: CreateTodoFormProps) => {
  const [name, setName] = useState('');
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(name);
    setName('');
  };
  return (
    <form
      style={{ display: 'flex', alignItems: 'center', gap: 25 }}
      onSubmit={handleSubmit}
    >
      <label style={{ flex: 1, display: 'flex' }}>
        <StyledInput
          type="text"
          placeholder="add details"
          value={name}
          onChange={e => setName(e.target.value)}
          aria-label="add details"
        />
      </label>
      <StyledButton type="submit" disabled={!name}>
        Add
      </StyledButton>
    </form>
  );
};
