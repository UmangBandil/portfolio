import './App.css'
import HomeTemplate from './templates/HomeTemplate';
import SkillsGrid from './organisms/SkillsGrid';
import Features from './organisms/Features';
import Stats from './organisms/Stats';
import ProjectCard from './organisms/ProjectCard';
import Testimonials from './organisms/Testimonials';
import Gallery from './organisms/Gallery';

function App() {
  const navbarProps = {
    brand: 'Umang Bandil',
    navItems: [
      { label: 'Home', href: '#home', active: true },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
    ctaLabel: 'Get in Touch',
  };

  const heroProps = {
    title: 'Welcome to My Portfolio',
    subtitle: 'Full Stack Developer & Component Designer',
    description: 'Building modern web applications with React, TypeScript, and TailwindCSS. Specializing in component-driven architecture and scalable UI systems.',
    avatarInitials: 'UB',
    badges: ['React', 'TypeScript', 'TailwindCSS', 'Storybook'],
    primaryBtnLabel: 'Explore Work',
    secondaryBtnLabel: 'Download CV',
  };

  const skillsData = [
    {
      title: 'Frontend Development',
      description: 'Building responsive, accessible web interfaces',
      skills: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
      proficiency: 'expert' as const,
    },
    {
      title: 'Component Design',
      description: 'Creating reusable component systems',
      skills: ['Atomic Design', 'Storybook', 'Design Systems', 'TypeScript'],
      proficiency: 'advanced' as const,
    },
    {
      title: 'UI/UX Tools',
      description: 'Design and prototyping tools expertise',
      skills: ['Figma', 'CSS', 'Animation', 'DaisyUI'],
      proficiency: 'advanced' as const,
    },
  ];

  const featuresData = [
    {
      title: 'Responsive Design',
      description: 'Mobile-first approach with TailwindCSS',
      icon: 'grid',
    },
    {
      title: 'Type Safe',
      description: 'Full TypeScript support for code safety',
      icon: 'shield',
    },
    {
      title: 'Component Library',
      description: '50+ production-ready components',
      icon: 'layers',
    },
    {
      title: 'Storybook Integration',
      description: 'Interactive component documentation',
      icon: 'book',
    },
  ];

  const statsData = [
    { value: '50+', label: 'Components Built' },
    { value: '17', label: 'Atomic Atoms' },
    { value: '15', label: 'Molecules' },
    { value: '12', label: 'Organisms' },
  ];

  const projectsData = [
    {
      title: 'Portfolio Component Library',
      description: 'A complete design system with 50+ components following atomic design principles.',
      tags: ['React', 'TypeScript', 'TailwindCSS', 'Storybook'],
      featured: true,
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with product catalog and checkout.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      featured: false,
    },
    {
      title: 'Dashboard Analytics',
      description: 'Real-time analytics dashboard with interactive charts and reports.',
      tags: ['React', 'D3.js', 'WebSocket', 'Express'],
      featured: false,
    },
  ];

  const testimonialsData = [
    {
      quote: 'Outstanding component design and architecture. A true professional.',
      author: 'John Smith',
      role: 'Tech Lead',
      rating: 5,
    },
    {
      quote: 'Great attention to detail and best practices in code quality.',
      author: 'Sarah Johnson',
      role: 'Product Manager',
      rating: 5,
    },
    {
      quote: 'Excellent work on the design system implementation.',
      author: 'Mike Davis',
      role: 'Creative Director',
      rating: 4,
    },
  ];

  const galleryData = [
    { id: '1', src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop', alt: 'Project 1', title: 'Component Library' },
    { id: '2', src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop', alt: 'Project 2', title: 'Dashboard' },
    { id: '3', src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop', alt: 'Project 3', title: 'E-Commerce' },
    { id: '4', src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop', alt: 'Project 4', title: 'Analytics' },
    { id: '5', src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop', alt: 'Project 5', title: 'Mobile App' },
    { id: '6', src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop', alt: 'Project 6', title: 'Web App' },
  ];

  const footerProps = {
    brand: 'Umang Bandil',
    description: 'Full Stack Developer crafting beautiful and functional digital experiences.',
    sections: [
      {
        title: 'Product',
        links: [
          { label: 'Components', url: '#components' },
          { label: 'Documentation', url: '#docs' },
          { label: 'Storybook', url: '#storybook' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'Blog', url: '#blog' },
          { label: 'GitHub', url: 'https://github.com' },
          { label: 'Portfolio', url: '#portfolio' },
        ],
      },
      {
        title: 'Connect',
        links: [
          { label: 'LinkedIn', url: 'https://linkedin.com' },
          { label: 'Twitter', url: 'https://twitter.com' },
          { label: 'Email', url: 'mailto:contact@example.com' },
        ],
      },
    ],
    socialLinks: [
      { name: 'GitHub', url: 'https://github.com', icon: 'github' },
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
      { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
    ],
    copyrightText: '© 2024 Umang Bandil. All rights reserved.',
  };

  return (
    <HomeTemplate navbar={navbarProps} hero={heroProps} footer={footerProps}>
      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-base-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
          <SkillsGrid skills={skillsData} columns={3} />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-base-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Me</h2>
          <Features features={featuresData} columns={4} />
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 px-4 bg-base-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">By The Numbers</h2>
          <Stats stats={statsData} columns={4} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-base-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, idx) => (
              <ProjectCard
                key={idx}
                title={project.title}
                description={project.description}
                tags={project.tags}
                featured={project.featured}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4 bg-base-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Portfolio Gallery</h2>
          <Gallery items={galleryData} columns={3} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 bg-base-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What People Say</h2>
          <Testimonials testimonials={testimonialsData} columns={3} />
        </div>
      </section>
    </HomeTemplate>
  );
}

export default App
