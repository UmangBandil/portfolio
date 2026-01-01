import React from 'react';

interface TextareaProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  className?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  placeholder = '',
  value = '',
  onChange,
  rows = 3,
  className = '',
}) => {
  const baseClasses = 'textarea textarea-bordered';
  const classes = `${baseClasses} ${className}`.trim();

  return (
    <textarea
      className={classes}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
    />
  );
};

export default Textarea;