import type { Meta, StoryObj } from '@storybook/react';

import { testGame } from '../../lib/globals';

import AttractMode from './AttractMode';

const meta: Meta<typeof AttractMode> = {
  component: AttractMode,
};

export default meta;
type Story = StoryObj<typeof AttractMode>;

export const Primary: Story = {
  args: testGame
};
