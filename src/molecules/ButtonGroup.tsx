import React from 'react';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import Typography from '../atoms/Typography';

interface ButtonGroupProps {
  buttons: {
    label: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
    icon?: string;
    disabled?: boolean;
  }[];
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  buttons,
  orientation = 'horizontal',
  className = '',
}) => {
  const flexClass = orientation === 'horizontal' ? 'flex-row' : 'flex-col';

  return (
    <div className={`flex ${flexClass} gap-2 ${className}`.trim()}>
      {buttons.map((btn, idx) => (
        <Button
          key={idx}
          variant={btn.variant || 'primary'}
          onClick={btn.onClick}
          disabled={btn.disabled}
          className="flex items-center gap-2"
        >
          {btn.icon && <Icon name={btn.icon} size="sm" />}
          {btn.label}
        </Button>
      ))}
    </div>
  );
};

export default ButtonGroup;