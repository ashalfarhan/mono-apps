import clsx from 'clsx';
import { ForwardedRef, forwardRef, useState } from 'react';
import { TabContext } from './TabsContext';
import styles from './Tabs.module.css';

type TabsProps = {
  defaultValue: number;
} & JSX.IntrinsicElements['div'];

const Tabs = (
  { defaultValue, ...props }: TabsProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const [activeIndex, setActiveIndex] = useState(defaultValue);
  return (
    <TabContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div
        {...props}
        className={clsx(styles.container, props.className)}
        ref={ref}
      />
    </TabContext.Provider>
  );
};

const TabsForwarded = forwardRef(Tabs);

export { TabsForwarded as Tabs };
