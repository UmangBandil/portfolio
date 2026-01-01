import type { Meta, StoryObj } from '@storybook/react';
import Gallery from '../organisms/Gallery';

const meta: Meta<typeof Gallery> = {
  title: 'Organisms/Gallery',
  component: Gallery,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    images: [
      {
        id: '1',
        src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400',
        alt: 'Project 1',
        title: 'Web Design Project',
      },
      {
        id: '2',
        src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400',
        alt: 'Project 2',
        title: 'Mobile App Design',
      },
      {
        id: '3',
        src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400',
        alt: 'Project 3',
        title: 'Branding Project',
      },
      {
        id: '4',
        src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400',
        alt: 'Project 4',
        title: 'UI Components',
      },
    ],
    columns: 2,
  },
};