import React from 'react';

interface RatingProps {
  value?: number;
  max?: number;
  onChange?: (value: number) => void;
  readonly?: boolean;
  className?: string;
}

const Rating: React.FC<RatingProps> = ({
  value = 0,
  max = 5,
  onChange,
  readonly = false,
  className = '',
}) => {
  const classes = `rating ${className}`.trim();

  return (
    <div className={classes}>
      {Array.from({ length: max }).map((_, index) => (
        <input
          key={index}
          type="radio"
          name={`rating-${Math.random()}`}
          className="mask mask-star-2 bg-orange-400"
          value={index + 1}
          checked={value === index + 1}
          onChange={() => !readonly && onChange?.(index + 1)}
          disabled={readonly}
        />
      ))}
    </div>
  );
};

export default Rating;