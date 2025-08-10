import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center p-6">
      <div className="flex items-center justify-center h-16 w-16 mx-auto mb-4">
        {/* You can use an icon library like react-icons here */}
        <span className="text-4xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-dark mb-2">{title}</h3>
      <p className="text-secondary">{description}</p>
    </div>
  );
};

export default FeatureCard;