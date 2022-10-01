import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import styles from './TabList.module.css';

const TabList = (
  props: JSX.IntrinsicElements['div'],
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <div
      {...props}
      className={clsx(styles.container, props.className)}
      ref={ref}
      role="tablist"
    />
  );
};

const TabListForwarded = forwardRef(TabList);

export { TabListForwarded as TabList };
