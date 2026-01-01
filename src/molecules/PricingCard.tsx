import React from 'react';
import Badge from '../atoms/Badge';
import Button from '../atoms/Button';
import Card from '../atoms/Card';
import Typography from '../atoms/Typography';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  description,
  features,
  popular = false,
  buttonLabel = 'Choose',
  onButtonClick,
}) => {
  return (
    <Card className={popular ? 'ring-2 ring-primary scale-105' : ''}>
      {popular && (
        <Badge variant="primary" className="mb-3">
          Most Popular
        </Badge>
      )}
      <Typography variant="h3" className="text-2xl font-bold mb-2">
        {name}
      </Typography>
      <div className="mb-4">
        <Typography variant="span" className="text-4xl font-bold">
          {price}
        </Typography>
      </div>
      <Typography variant="p" className="text-sm mb-6">
        {description}
      </Typography>
      <ul className="space-y-3 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm">
            <span className="text-primary">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <Button
        variant={popular ? 'primary' : 'secondary'}
        className="w-full"
        onClick={onButtonClick}
      >
        {buttonLabel}
      </Button>
    </Card>
  );
};

export default PricingCard;