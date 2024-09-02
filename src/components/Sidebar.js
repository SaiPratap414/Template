// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiBell, FiSettings } from 'react-icons/fi'; // Importing icons from React Icons

function Sidebar() {
  return (
    <nav className="sidebar">
      {/* Wrap the logo in a Link to navigate to the default route */}
      <Link to="/" className="logo">
        Logo
      </Link>
      <ul>
        <li>
          <Link to="/">
            <FiMail className="icon" /> Email Template
          </Link>
        </li>
        <li>
          <Link to="/notification-templates">
            <FiBell className="icon" /> Notification Template
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <FiSettings className="icon" /> Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
