import React from 'react';
import Testimonial from '../molecules/Testimonial';

interface TestimonialsProps {
  testimonials: {
    quote: string;
    author: string;
    role: string;
    avatar?: string;
    rating?: number;
  }[];
  columns?: 1 | 2 | 3;
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials, columns = 3 }) => {
  const gridClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  }[columns];

  return (
    <div className={`grid ${gridClass} gap-6`}>
      {testimonials.map((testimonial, idx) => (
        <Testimonial
          key={idx}
          quote={testimonial.quote}
          author={testimonial.author}
          role={testimonial.role}
          avatar={testimonial.avatar}
          rating={testimonial.rating}
        />
      ))}
    </div>
  );
};

export default Testimonials;