import React from 'react';
import Layout from '../components/layout/Layout';

const Monitoring: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-container-max mx-auto px-margin-desktop py-stack-lg min-h-[60vh] flex flex-col items-center justify-center text-center">
        <span className="material-symbols-outlined text-6xl text-primary/20 mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
          monitoring
        </span>
        <h1 className="font-display-lg text-primary mb-4">Monitoring & Evaluation</h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl">
          Content for the Monitoring & Evaluation page is currently under development. This section will present the framework for assessing the policy's effectiveness over time.
        </p>
      </div>
    </Layout>
  );
};

export default Monitoring;
