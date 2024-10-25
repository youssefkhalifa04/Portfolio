import React from 'react';
import './Myservice.css';
import { Card } from './Card';
import services_data from '../../assets/services_data';

export const Myservice = () => {
  return (
    <section>
      <h2>
        My Services <hr className="line line2" />
      </h2>
      <div className="cards">
        {services_data.map((work, index) => {
          return (
            <Card
              key={work.s_no} // Use a unique key, such as s_no, from the service object
              code={index}
              number={work.s_no}
              title={work.s_name}
              text={work.s_desc}
            />
          );
        })}
      </div>
    </section>
  );
};

