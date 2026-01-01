import type { Meta, StoryObj } from '@storybook/react';
import Testimonials from '../organisms/Testimonials';

const meta: Meta<typeof Testimonials> = {
  title: 'Organisms/Testimonials',
  component: Testimonials,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testimonials: [
      {
        id: '1',
        quote: 'Exceptional work and attention to detail. Highly recommend!',
        author: 'John Doe',
        role: 'CEO at Tech Startup',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
        rating: 5,
      },
      {
        id: '2',
        quote: 'Professional and creative approach to every project.',
        author: 'Jane Smith',
        role: 'Product Manager',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
        rating: 5,
      },
      {
        id: '3',
        quote: 'Great communication and timely delivery.',
        author: 'Mike Johnson',
        role: 'Startup Founder',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
        rating: 4,
      },
    ],
    columns: 3,
  },
};