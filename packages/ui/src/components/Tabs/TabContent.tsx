import { ForwardedRef, forwardRef } from 'react';
import { StyledContent } from './styled';
import { useTabsContext } from './TabsContext';

type TabContentProps = {
  value: number;
} & JSX.IntrinsicElements['div'];

const TabContent = (
  { value, ...props }: TabContentProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const { activeIndex } = useTabsContext();
  return (
    <StyledContent
      {...props}
      data-tab={value}
      ref={ref}
      active={activeIndex === value}
      role="tabpanel"
      aria-hidden={activeIndex !== value}
      id={`tab-content-${value}`}
      aria-labelledby={`tab-trigger-${value}`}
    />
  );
};

const TabContentForwarded = forwardRef(TabContent);

export { TabContentForwarded as TabContent };
