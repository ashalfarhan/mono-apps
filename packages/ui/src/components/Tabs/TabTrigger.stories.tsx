import { TabTrigger, Tabs, TabList } from '.';
import type { ComponentMeta } from '@storybook/react';

export default {
  title: 'TabTrigger',
  component: TabTrigger,
} as ComponentMeta<typeof TabTrigger>;

export const Example = () => (
  <Tabs defaultValue={0}>
    <TabList>
      <TabTrigger value={0}>One</TabTrigger>
      <TabTrigger value={2} disabled>
        Three
      </TabTrigger>
    </TabList>
  </Tabs>
);
