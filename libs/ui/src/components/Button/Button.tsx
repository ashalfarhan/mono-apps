import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  color?: 'primary' | 'secondary' | 'danger';
  rounded?: 'xl' | 'default';
  variant?: 'fill' | 'text';
} & JSX.IntrinsicElements['button'];

const Button = (
  {
    color = 'primary',
    rounded = 'default',
    variant = 'fill',
    ...props
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  return (
    <button
      {...props}
      className={clsx(
        styles.button,
        styles[color],
        styles[variant],
        { [styles['rounded-xl']]: rounded === 'xl' },
        props.className
      )}
      ref={ref}
    />
  );
};

const ButtonForwarded = forwardRef(Button);
export { ButtonForwarded as Button };
