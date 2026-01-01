import type { Meta, StoryObj } from '@storybook/react';
import Testimonial from '../molecules/Testimonial';

const meta: Meta<typeof Testimonial> = {
  title: 'Molecules/Testimonial',
  component: Testimonial,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    quote: 'Amazing service and incredible attention to detail!',
    author: 'John Doe',
    role: 'CEO, Tech Startup',
    rating: 5,
  },
};

export const WithAvatar: Story = {
  args: {
    quote: 'The best team I have worked with on a project.',
    author: 'Jane Smith',
    role: 'Product Manager',
    avatar: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69da7d.jpg',
    rating: 5,
  },
};