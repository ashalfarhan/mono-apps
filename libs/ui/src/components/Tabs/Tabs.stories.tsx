import { Tabs, TabList, TabContent, TabPannels, TabTrigger } from '.';
import type { Meta } from '@storybook/react';

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as Meta;

export const Example = () => (
  <Tabs defaultValue={0}>
    <TabList>
      <TabTrigger value={0}>One</TabTrigger>
      <TabTrigger value={1}>Two</TabTrigger>
      <TabTrigger value={2} disabled>
        Three
      </TabTrigger>
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
      <TabContent value={1}>
        <h1>Two</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam
          quod error, accusamus deleniti ea rem inventore beatae voluptate
          repudiandae?
        </p>
      </TabContent>
    </TabPannels>
  </Tabs>
);
