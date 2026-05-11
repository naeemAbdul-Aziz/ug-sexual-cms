import React from 'react';
import Layout from '../components/layout/Layout';

const Institutions: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-container-max mx-auto px-margin-desktop py-stack-lg min-h-[60vh] flex flex-col items-center justify-center text-center">
        <span className="material-symbols-outlined text-6xl text-primary/20 mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
          account_balance
        </span>
        <h1 className="font-display-lg text-primary mb-4">Institutions</h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl">
          Content for the Institutions page is currently under development. This section will detail the various bodies and committees responsible for implementing the gender policy.
        </p>
      </div>
    </Layout>
  );
};

export default Institutions;
