import type { Meta, StoryObj } from '@storybook/react';
import { testGame as game, testArcadeWithLocation } from './../../lib/globals';
import { LocationList } from './LocationList';
import { LocationItem } from './LocationItem';

const LocationListWithLocationInfo = LocationList(LocationItem);

const meta: Meta<typeof LocationListWithLocationInfo> = {
  component: LocationListWithLocationInfo,
};

export default meta;
type Story = StoryObj<typeof LocationListWithLocationInfo>;

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