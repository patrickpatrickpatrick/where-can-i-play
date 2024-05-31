import type { Preview } from "@storybook/react";

import { BodyLayout } from '../src/app/layout';

const preview: Preview = {
  decorators: [
    Story => <BodyLayout children={<Story />}/>
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
