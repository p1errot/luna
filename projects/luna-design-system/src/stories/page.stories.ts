import { expect, userEvent, within } from '@storybook/test';
import { LunaDesignSystemComponent } from 'luna-design-system';

import type { Meta, StoryObj } from '@storybook/angular';
const meta: Meta<LunaDesignSystemComponent> = {
  title: 'Example/LunaDesignSystem',
  component: LunaDesignSystemComponent,
  parameters: {},
};

export default meta;
type Story = StoryObj<LunaDesignSystemComponent>;

export const LoggedOut: Story = {};

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole('button', { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};
