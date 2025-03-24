import React from 'react';
import logements from '../data/logements.json';
import Card from '../components/card';

const Homecards = () => {
    return (
      <div className="homecards">
        {logements.map((logement) => (
          <Card key={logement.id} text={logement.title} />
        ))}
      </div>
    );
};

export default Homecards;



  

