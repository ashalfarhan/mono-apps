import { ForwardedRef, forwardRef } from 'react';
import { StyledTabList } from './styled';

export const TabList = forwardRef(
  (props: JSX.IntrinsicElements['div'], ref: ForwardedRef<HTMLDivElement>) => {
    return <StyledTabList {...props} ref={ref} role="tablist" />;
  }
);
