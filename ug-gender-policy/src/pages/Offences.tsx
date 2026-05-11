import React from 'react';
import Layout from '../components/layout/Layout';

const Offences: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-container-max mx-auto px-margin-desktop py-stack-lg min-h-[60vh] flex flex-col items-center justify-center text-center">
        <span className="material-symbols-outlined text-6xl text-primary/20 mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
          gavel
        </span>
        <h1 className="font-display-lg text-primary mb-4">Offences & Sanctions</h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl">
          Content for the Offences & Sanctions page is currently under development. This section will outline categorized offences and their corresponding disciplinary measures.
        </p>
      </div>
    </Layout>
  );
};

export default Offences;
