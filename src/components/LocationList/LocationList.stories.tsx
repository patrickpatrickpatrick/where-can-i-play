import type { Meta, StoryObj } from '@storybook/react';
import { testGame as game, testArcadeWithLocation } from './../../lib/globals';
import LocationList from './LocationList';

const meta: Meta<typeof LocationList> = {
  component: LocationList,
};

export default meta;
type Story = StoryObj<typeof LocationList>;

export const Primary: Story = {
  args: {
    game,
    locationList: [
      {
        ...testArcadeWithLocation,
      }
    ]
  },
};