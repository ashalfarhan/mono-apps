import { ForwardedRef, forwardRef, useState } from 'react';
import { StyledPannels, StyledTabList, StyledTabWrapper } from './styled';
import { TabContext } from './TabsContext';

type TabsProps = {
  defaultValue: number;
} & JSX.IntrinsicElements['div'];

const Tabs = forwardRef(
  (
    { defaultValue, children, ...props }: TabsProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const [activeIndex, setActiveIndex] = useState(defaultValue);
    return (
      <TabContext.Provider value={{ activeIndex, setActiveIndex }}>
        <StyledTabWrapper {...props} ref={ref}>
          {children}
        </StyledTabWrapper>
      </TabContext.Provider>
    );
  }
);

const TabPannels = StyledPannels;
const TabList = StyledTabList;

export { Tabs, TabPannels, TabList };
