import { createContext, useContext } from 'react';

type TabContextValue = {
  activeIndex: number;
  setActiveIndex: (value: number) => void;
};

const TabContext = createContext<TabContextValue | null>(null);

const useTabsContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('`useTabsContext` must be called inside `Tabs` component');
  }
  return context;
};

export { TabContext, useTabsContext };
