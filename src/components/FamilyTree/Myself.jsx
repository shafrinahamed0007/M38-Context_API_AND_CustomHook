import React from 'react';
import Special from './Special';

const Myself = ({asset}) => {
  return (
    <div>
      <h3>My Self</h3>
      <section>
        <Special asset={asset} />
      </section>
    </div>
  );
};

export default Myself;