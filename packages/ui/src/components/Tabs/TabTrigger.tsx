import { ForwardedRef, forwardRef } from 'react';
import { callHandlers } from '../../utils';
import { StyledButton, StyledButtonIndicator } from './styled';
import { useTabsContext } from './TabsContext';

type TabTriggerProps = {
  value: number;
} & JSX.IntrinsicElements['button'];

const TabTrigger = forwardRef(
  (
    { value, children, ...props }: TabTriggerProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const { activeIndex, setActiveIndex } = useTabsContext();
    const onClick = () => {
      setActiveIndex(value);
    };
    return (
      <StyledButton
        {...props}
        ref={ref}
        onClick={callHandlers(onClick, props.onClick)}
        data-tab={value}
      >
        {children}
        <StyledButtonIndicator active={activeIndex === value} />
      </StyledButton>
    );
  }
);

export { TabTrigger };
