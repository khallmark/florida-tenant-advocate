import React from 'react';
import FloridaStatuteViewer from '../components/FloridaStatuteViewer';

const StatutePage: React.FC = () => {
  return (
    <div className="page-container">
      <h2 className="page-header">Florida Residential Landlord & Tenant Act</h2>
      <p className="page-intro">
        This section provides direct access to the laws governing residential tenancies in Florida (Chapter 83, Part II). 
        Understanding these statutes is crucial for knowing your rights and obligations as a tenant.
      </p>
      <FloridaStatuteViewer />
    </div>
  );
};

export default StatutePage; 