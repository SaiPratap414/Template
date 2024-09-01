import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="logo">Logo</div>
      <ul>
        <li><Link to="/">Email Template</Link></li>
        <li><Link to="/notification-templates">Notification Template</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;