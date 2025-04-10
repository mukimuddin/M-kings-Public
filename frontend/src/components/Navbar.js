import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">M Kings Group</div>
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 