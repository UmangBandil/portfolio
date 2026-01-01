import type { Meta, StoryObj } from '@storybook/react';
import Pricing from '../organisms/Pricing';

const meta: Meta<typeof Pricing> = {
  title: 'Organisms/Pricing',
  component: Pricing,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    plans: [
      {
        id: '1',
        name: 'Starter',
        price: '$29',
        description: 'Perfect for individuals',
        features: ['5 Projects', 'Basic Support', '1GB Storage'],
        cta: 'Get Started',
        highlighted: false,
      },
      {
        id: '2',
        name: 'Professional',
        price: '$79',
        description: 'For growing teams',
        features: ['Unlimited Projects', 'Priority Support', '100GB Storage', 'API Access'],
        cta: 'Get Started',
        highlighted: true,
      },
      {
        id: '3',
        name: 'Enterprise',
        price: 'Custom',
        description: 'For large organizations',
        features: ['Everything in Pro', 'Dedicated Support', 'Unlimited Storage', 'SLA Guarantee'],
        cta: 'Contact Us',
        highlighted: false,
      },
    ],
    columns: 3,
  },
};