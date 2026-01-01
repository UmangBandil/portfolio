import React from 'react';
import Navbar, { type NavbarProps } from '../organisms/Navbar';
import Footer, { type FooterProps } from '../organisms/Footer';

interface BlogTemplateProps {
  navbar: NavbarProps;
  footer: FooterProps;
  title: string;
  author: string;
  date: string;
  readTime: string;
  heroImage?: string;
  children: React.ReactNode;
}

const BlogTemplate: React.FC<BlogTemplateProps> = ({
  navbar,
  footer,
  title,
  author,
  date,
  readTime,
  heroImage,
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      <Navbar {...navbar} />
      <main className="flex-1">
        {heroImage && (
          <div className="w-full h-96 overflow-hidden">
            <img
              src={heroImage}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <article className="py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-base-900 mb-4">
                {title}
              </h1>
              <div className="flex flex-wrap gap-4 text-base-600">
                <span>{author}</span>
                <span>•</span>
                <time>{date}</time>
                <span>•</span>
                <span>{readTime}</span>
              </div>
            </header>
            <div className="prose prose-base max-w-none">
              {children}
            </div>
          </div>
        </article>
      </main>
      <Footer {...footer} />
    </div>
  );
};

export default BlogTemplate;