import { Tabs, TabList, TabContent, TabPannels, TabTrigger } from '.';
import type { ComponentMeta } from '@storybook/react';

export default {
  title: 'TabContent',
  component: TabContent,
} as ComponentMeta<typeof TabContent>;

export const Example = () => (
  <Tabs defaultValue={0}>
    <TabList>
      <TabTrigger value={0}>One</TabTrigger>
    </TabList>
    <TabPannels>
      <TabContent value={0}>
        <h1>One</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam
          quod error, accusamus deleniti ea rem inventore beatae voluptate
          repudiandae?
        </p>
      </TabContent>
    </TabPannels>
  </Tabs>
);
