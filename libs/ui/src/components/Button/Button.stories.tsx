import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Click me',
    rounded: 'xl',
    variant: 'fill',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = props => <Button {...props} />;

export const Example = Template.bind({});

Example.args = {};
