import React from 'react';

interface SelectProps {
  options: { label: string; value: string }[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  value = '',
  onChange,
  placeholder = 'Select an option',
  className = '',
}) => {
  const baseClasses = 'select select-bordered';
  const classes = `${baseClasses} ${className}`.trim();

  return (
    <select className={classes} value={value} onChange={onChange}>
      <option disabled value="">
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;