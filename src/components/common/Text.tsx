import React from 'react';

export const Title = ({ icon, text }: { icon: string; text: string }) => {
  return (
    <div className="space-y-8">
      <p className="text-7xl">{icon}</p>
      <h1 className="text-6xl font-medium">{text}</h1>
    </div>
  );
};
