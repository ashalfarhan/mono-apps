import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { it, expect, vi } from 'vitest';
import { Tabs, TabContent, TabList, TabPannels, TabTrigger } from '.';

it('should respect defaultValue props', () => {
  render(
    <Tabs defaultValue={1}>
      <TabList>
        <TabTrigger value={0}>One</TabTrigger>
        <TabTrigger value={1}>Two</TabTrigger>
      </TabList>
      <TabPannels>
        <TabContent value={0}>Content One</TabContent>
        <TabContent value={1}>Content Two</TabContent>
      </TabPannels>
    </Tabs>
  );

  const one = screen.queryByRole('tabpanel', {
    name: /one/i,
  });
  const two = screen.queryByRole('tabpanel', {
    name: /two/i,
  });
  expect(one).toBeNull();
  expect(two).toBeVisible();
});

it('should be able to switch tabs', async () => {
  render(
    <Tabs defaultValue={1}>
      <TabList>
        <TabTrigger value={0}>One</TabTrigger>
        <TabTrigger value={1}>Two</TabTrigger>
      </TabList>
      <TabPannels>
        <TabContent value={0}>Content One</TabContent>
        <TabContent value={1}>Content Two</TabContent>
      </TabPannels>
    </Tabs>
  );

  const tOne = screen.getByRole('tab', {
    name: /one/i,
  });
  const tabPanelOne = screen.queryByRole('tabpanel', {
    name: /one/i,
  });
  expect(tabPanelOne).toBeNull();
  await userEvent.click(tOne);
  expect(
    screen.queryByRole('tabpanel', {
      name: /one/i,
    })
  ).toBeVisible();
});

it('should throw error if cannot find TabsContext', () => {
  expect(() =>
    render(<TabTrigger value={0}>Test tab</TabTrigger>)
  ).toThrowError(/^`useTabsContext` must be called inside `Tabs` component$/i);
});

it('should also call passed onClick handler', async () => {
  const onClick = vi.fn();
  render(
    <Tabs defaultValue={0}>
      <TabTrigger value={0} onClick={onClick}>
        Click me
      </TabTrigger>
    </Tabs>
  );
  await userEvent.click(screen.getByText(/click me/i));
  expect(onClick).toHaveBeenCalledTimes(1);
});
