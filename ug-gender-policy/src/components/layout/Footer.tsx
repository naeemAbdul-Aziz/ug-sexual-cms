import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 px-margin-desktop bg-primary text-on-primary border-t border-white/5 mt-auto">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div className="flex flex-col gap-3 text-center md:text-left">
          <span className="font-headline-md text-2xl tracking-tight text-white">UG Gender Policy</span>
          <p className="font-body-md text-white/60 text-sm">
            © 2023 University of Ghana. Publication No. 975. All Rights Reserved.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-10 gap-y-4 justify-center">
          <a className="text-white/70 hover:text-secondary smooth-transition font-medium text-sm" href="#">Legal Basis</a>
          <a className="text-white/70 hover:text-secondary smooth-transition font-medium text-sm" href="#">Privacy Policy</a>
          <a className="text-white/70 hover:text-secondary smooth-transition font-medium text-sm" href="#">Contact EOB</a>
          <a className="text-white/70 hover:text-secondary smooth-transition font-medium text-sm" href="#">University Home</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
