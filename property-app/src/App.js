import React from 'react';
import Property from './components/Property';

const App = () => {
  const propertyData = [
    { title: 'Cozy Apartment', description: 'A lovely place with a view.', price: '$100/night' },
    { title: 'Modern Studio', description: 'Perfect for solo travelers.', price: '$80/night' },
    { title: 'Spacious Villa', description: 'Ideal for family vacations.', price: '$200/night' },
  ];

  return (
    <div>
      <h1>Welcome to PropertyPal</h1>
      <div className="property-list">
        {propertyData.map((property, index) => (
          <Property key={index} {...property} />
        ))}
      </div>
    </div>
  );
};

export default App;
