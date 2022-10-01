import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { useTabsContext } from './TabsContext';
import styles from './TabContent.module.css';

type TabContentProps = {
  value: number;
} & JSX.IntrinsicElements['div'];

const TabContent = (
  { value, ...props }: TabContentProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const { activeIndex } = useTabsContext();
  const isActive = activeIndex === value;
  return (
    <div
      {...props}
      data-tab={value}
      ref={ref}
      className={clsx(
        styles.container,
        {
          [styles.active]: isActive,
        },
        props.className
      )}
      role="tabpanel"
      aria-hidden={!isActive}
      id={`tab-content-${value}`}
      aria-labelledby={`tab-trigger-${value}`}
    />
  );
};

const TabContentForwarded = forwardRef(TabContent);

export { TabContentForwarded as TabContent };
