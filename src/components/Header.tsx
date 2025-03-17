import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul className="bg-gray-200 flex space-x-4 items-center justify-center">
          <li>
            <a href="/" className="hover:underline">Home</a>
          </li>
          <li>
            <a href="/dashboard" className="hover:underline">Dashboard</a>
          </li>
        </ul>
      </nav>
    </header>
  );


};

export default Header;
