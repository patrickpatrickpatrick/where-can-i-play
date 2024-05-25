import type { Meta, StoryObj } from '@storybook/react';

import { InfoCard, props } from './InfoCard';

const meta: Meta<typeof InfoCard> = {
  component: InfoCard,
};

export default meta;
type Story = StoryObj<typeof InfoCard>;

export const Primary: Story = {
  args: {
    children: <span>Example</span>
  },
};

export const Hoverable: Story = {
  args: {
      children: <span>Example</span>,
      isHoverable: true,
  },
};

export const Selectable: Story = {
  args: {
      children: <span>Example</span>,
      isSelectable: true,
  },
};  