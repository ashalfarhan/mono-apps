import clsx from 'clsx';
import styles from './TabPannels.module.css';

export const TabPannels = (props: JSX.IntrinsicElements['div']) => {
  return <div {...props} className={clsx(styles.container, props.className)} />;
};
