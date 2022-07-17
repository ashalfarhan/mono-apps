import { TabTrigger, Tabs, TabList } from '.';
import type { ComponentMeta } from '@storybook/react';

export default {
  title: 'TabList',
  component: TabList,
} as ComponentMeta<typeof TabList>;

export const Example = () => (
  <Tabs defaultValue={0}>
    <TabList>
      <TabTrigger value={0}>One</TabTrigger>
      <TabTrigger value={1}>Two</TabTrigger>
      <TabTrigger value={2} disabled>
        Three
      </TabTrigger>
    </TabList>
  </Tabs>
);
