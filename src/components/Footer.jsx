import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-center py-8 mt-12 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} AI Portfolio. Designed with precision.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
