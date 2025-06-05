import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul className="bg-gray-200 flex space-x-4 items-center justify-center">
          <li>
            <Link href="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link href="/dashboard" className="hover:underline">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </header>
  );


};

export default Header;
