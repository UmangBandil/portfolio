import React from 'react';

interface SliderProps {
  min?: number;
  max?: number;
  value?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  value = 50,
  onChange,
  className = '',
}) => {
  const classes = `range ${className}`.trim();

  return (
    <input
      type="range"
      className={classes}
      min={min}
      max={max}
      value={value}
      onChange={onChange}
    />
  );
};

export default Slider;