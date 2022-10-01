import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { callHandlers } from '../../utils';
import { useTabsContext } from './TabsContext';
import styles from './TabTrigger.module.css';

type TabTriggerProps = {
  value: number;
} & JSX.IntrinsicElements['button'];

const TabTrigger = (
  { value, children, ...props }: TabTriggerProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  const { activeIndex, setActiveIndex } = useTabsContext();
  const onClick = () => {
    setActiveIndex(value);
  };
  const isActive = activeIndex === value;
  return (
    <button
      {...props}
      className={clsx(styles.button, props.className)}
      ref={ref}
      onClick={callHandlers(onClick, props.onClick)}
      data-tab={value}
      type="button"
      role="tab"
      aria-expanded={isActive}
      id={`tab-trigger-${value}`}
      aria-controls={`tab-content-${value}`}
    >
      {children}
      <span className={clsx(styles.indicator, { [styles.active]: isActive })} />
    </button>
  );
};

const TabTriggerForwarded = forwardRef(TabTrigger);

export { TabTriggerForwarded as TabTrigger };
