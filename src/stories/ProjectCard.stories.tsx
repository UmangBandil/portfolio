import type { Meta, StoryObj } from '@storybook/react';
import ProjectCard from '../organisms/ProjectCard';

const meta: Meta<typeof ProjectCard> = {
  title: 'Organisms/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with payment integration and inventory management.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
  },
};

export const Featured: Story = {
  args: {
    title: 'AI Chat Application',
    description: 'Real-time chat application powered by GPT with intelligent responses.',
    tags: ['React', 'TypeScript', 'Firebase', 'OpenAI'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    featured: true,
  },
};