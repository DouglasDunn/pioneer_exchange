import React from 'react';
import './footer.css';

export default () => {
  return (
    <footer id="footer" className="bg-light text-black mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} Pioneer Exchange
    </footer>
  );
};
