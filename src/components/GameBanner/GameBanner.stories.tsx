import type { Meta, StoryObj } from '@storybook/react';

import { testGame } from './../../lib/globals';

import GameBanner from './GameBanner';

const meta: Meta<typeof GameBanner> = {
  component: GameBanner,
};

export default meta;
type Story = StoryObj<typeof GameBanner>;

export const Primary: Story = {
  args: testGame
};
