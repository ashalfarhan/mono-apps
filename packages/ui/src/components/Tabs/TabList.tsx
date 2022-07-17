import { ForwardedRef, forwardRef } from 'react';
import { StyledTabList } from './styled';

const TabList = (
  props: JSX.IntrinsicElements['div'],
  ref: ForwardedRef<HTMLDivElement>
) => {
  return <StyledTabList {...props} ref={ref} role="tablist" />;
};

const TabListForwarded = forwardRef(TabList);

export { TabListForwarded as TabList };
