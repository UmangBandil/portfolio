import React from 'react';
import Card from '../atoms/Card';
import Rating from '../atoms/Rating';
import Typography from '../atoms/Typography';
import Avatar from '../atoms/Avatar';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
  rating?: number;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  avatar,
  rating = 5,
}) => {
  return (
    <Card>
      {rating > 0 && (
        <div className="mb-4">
          <Rating value={rating} max={5} readonly />
        </div>
      )}
      <Typography variant="p" className="mb-6 italic">
        "{quote}"
      </Typography>
      <div className="flex items-center gap-4 pt-4 border-t border-base-300">
        {avatar && (
          <Avatar src={avatar} size="sm" alt={author} />
        )}
        <div>
          <Typography variant="h4" className="font-bold">
            {author}
          </Typography>
          <Typography variant="span" className="text-sm opacity-70">
            {role}
          </Typography>
        </div>
      </div>
    </Card>
  );
};

export default Testimonial;