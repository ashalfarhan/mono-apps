import { ForwardedRef, forwardRef } from 'react';
import { StyledContent } from './styled';
import { useTabsContext } from './TabsContext';

type TabContentProps = {
  value: number;
} & JSX.IntrinsicElements['div'];

const TabContent = forwardRef(
  ({ value, ...props }: TabContentProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { activeIndex } = useTabsContext();
    return (
      <StyledContent
        {...props}
        data-tab={value}
        ref={ref}
        active={activeIndex === value}
      />
    );
  }
);

export { TabContent };
