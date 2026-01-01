import React from 'react';
import PricingCard from '../molecules/PricingCard';

interface PricingProps {
  plans: {
    name: string;
    price: string;
    description: string;
    features: string[];
    popular?: boolean;
    buttonLabel?: string;
    onButtonClick?: () => void;
  }[];
  columns?: 2 | 3 | 4;
}

const Pricing: React.FC<PricingProps> = ({ plans, columns = 3 }) => {
  const gridClass = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <div className={`grid ${gridClass} gap-6`}>
      {plans.map((plan, idx) => (
        <PricingCard
          key={idx}
          name={plan.name}
          price={plan.price}
          description={plan.description}
          features={plan.features}
          popular={plan.popular}
          buttonLabel={plan.buttonLabel}
          onButtonClick={plan.onButtonClick}
        />
      ))}
    </div>
  );
};

export default Pricing;