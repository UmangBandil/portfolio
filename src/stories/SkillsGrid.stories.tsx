import type { Meta, StoryObj } from '@storybook/react';
import SkillsGrid from '../organisms/SkillsGrid';

const meta: Meta<typeof SkillsGrid> = {
  title: 'Organisms/SkillsGrid',
  component: SkillsGrid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    skills: [
      {
        title: 'Frontend',
        description: 'Building beautiful user interfaces',
        skills: ['React', 'TypeScript', 'TailwindCSS'],
        proficiency: 'expert',
      },
      {
        title: 'Backend',
        description: 'Server-side development',
        skills: ['Node.js', 'Express', 'MongoDB'],
        proficiency: 'advanced',
      },
      {
        title: 'DevOps',
        description: 'Deployment and infrastructure',
        skills: ['Docker', 'GitHub Actions', 'AWS'],
        proficiency: 'intermediate',
      },
    ],
    columns: 3,
  },
};