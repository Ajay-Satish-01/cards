import React from 'react';
import './App.css';

import Card from './Components/Card';

function App() {
  const data = [
    {
      type: 'Free',
      price: '0',
      benefits: [
        {
          benefit: 'Single User',
          provided: true,
        },
        {
          benefit: '5GB Storage',
          provided: true,
        },
        {
          benefit: 'Unlimited Public Projects',
          provided: true,
        },
        {
          benefit: 'Community Access',
          provided: true,
        },
        {
          benefit: 'Unlimited Private Projects',
          provided: false,
        },
        {
          benefit: 'Dedicated Phone Support',
          provided: false,
        },
        {
          benefit: 'Free Subdomain',
          provided: false,
        },
        {
          benefit: 'Monthly Status Reports',
          provided: false,
        },
      ],
    },
    {
      type: 'Plus',
      price: '9',
      benefits: [
        {
          benefit: '5 Users',
          provided: true,
        },
        {
          benefit: '50GB Storage',
          provided: true,
        },
        {
          benefit: 'Unlimited Public Projects',
          provided: true,
        },
        {
          benefit: 'Community Access',
          provided: true,
        },
        {
          benefit: 'Unlimited Private Projects',
          provided: true,
        },
        {
          benefit: 'Dedicated Phone Support',
          provided: true,
        },
        {
          benefit: 'Free Subdomain',
          provided: true,
        },
        {
          benefit: 'Monthly Status Reports',
          provided: false,
        },
      ],
    },
    {
      type: 'Pro',
      price: '49',
      benefits: [
        {
          benefit: 'Unlimited Users',
          provided: true,
        },
        {
          benefit: '150GB Storage',
          provided: true,
        },
        {
          benefit: 'Unlimited Public Projects',
          provided: true,
        },
        {
          benefit: 'Community Access',
          provided: true,
        },
        {
          benefit: 'Unlimited Private Projects',
          provided: true,
        },
        {
          benefit: 'Dedicated Phone Support',
          provided: true,
        },
        {
          benefit: 'Free Subdomain',
          provided: true,
        },
        {
          benefit: 'Monthly Status Reports',
          provided: true,
        },
      ],
    },
  ];
  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {data.map((tier, value) => {
              return (
                <div className="col-lg-4" key={value}>
                  <Card
                    benefits={tier.benefits}
                    tier={tier.type}
                    amount={tier.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
