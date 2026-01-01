import type { Meta, StoryObj } from '@storybook/react';
import SkillCard from '../molecules/SkillCard';

const meta: Meta<typeof SkillCard> = {
  title: 'Molecules/SkillCard',
  component: SkillCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Intermediate: Story = {
  args: {
    title: 'Frontend Development',
    description: 'Building beautiful and responsive user interfaces',
    skills: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
    proficiency: 'intermediate',
  },
};

export const Expert: Story = {
  args: {
    title: 'Full Stack Development',
    description: 'End-to-end application development',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Docker'],
    proficiency: 'expert',
  },
};