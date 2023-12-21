import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>
        &copy; 2023 Your Event App | Developed by{' '}
        <a href="https://your-portfolio.com" className="underline" target="_blank" rel="noopener noreferrer">
          Your Name
        </a>
      </p>
    </footer>
  );
};

export default Footer;
