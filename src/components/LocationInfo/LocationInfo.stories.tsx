import type { Meta, StoryObj } from '@storybook/react';

import LocationInfo from './LocationInfo';

const meta: Meta<typeof LocationInfo> = {
  component: LocationInfo,
};

export default meta;
type Story = StoryObj<typeof LocationInfo>;

export const Primary: Story = {
  args: {
    location: {
      name: "Really Cool Arcade",
      city: "London",
      house_number: "98",
      postcode: "LON DON",
      road: "Cool Road",
      region: "Region",
      country: "Country",
    }
  },
};