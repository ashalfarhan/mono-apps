import { ForwardedRef, forwardRef } from 'react';
import { callHandlers } from '../../utils';
import { StyledButton, StyledButtonIndicator } from './styled';
import { useTabsContext } from './TabsContext';

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
  return (
    <StyledButton
      {...props}
      ref={ref}
      onClick={callHandlers(onClick, props.onClick)}
      data-tab={value}
      type="button"
      role="tab"
      aria-expanded={activeIndex === value}
      id={`tab-trigger-${value}`}
      aria-controls={`tab-content-${value}`}
    >
      {children}
      <StyledButtonIndicator active={activeIndex === value} />
    </StyledButton>
  );
};

const TabTriggerForwarded = forwardRef(TabTrigger);

export { TabTriggerForwarded as TabTrigger };