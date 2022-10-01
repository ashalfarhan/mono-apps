import { Button } from '@acme/ui';
import { FormEvent, useState } from 'react';
import styles from './CreateTodoForm.module.css';

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
        <input
          type="text"
          placeholder="add details"
          value={name}
          onChange={e => setName(e.target.value)}
          aria-label="add details"
          className={styles.input}
        />
      </label>
      <Button type="submit" disabled={!name} rounded="xl">
        Add
      </Button>
    </form>
  );
};
