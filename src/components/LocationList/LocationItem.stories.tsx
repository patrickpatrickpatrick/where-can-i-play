import type { Meta, StoryObj } from '@storybook/react';

import { LocationItem } from './LocationItem';

const meta: Meta<typeof LocationItem> = {
  component: LocationItem,
};

export default meta;
type Story = StoryObj<typeof LocationItem>;

export const Primary: Story = {
  args: {
    osm_id: 1,
    name: "Really Cool Arcade",
  },
};