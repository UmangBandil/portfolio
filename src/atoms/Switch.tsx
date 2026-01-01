import React from 'react';

interface SwitchProps {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
}

const Switch: React.FC<SwitchProps> = ({
  checked = false,
  onChange,
  disabled = false,
  className = '',
}) => {
  const classes = `toggle ${className}`.trim();

  return (
    <input
      type="checkbox"
      className={classes}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default Switch;