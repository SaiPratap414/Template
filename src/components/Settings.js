import React, { useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import SystemSettings from './SystemSettings';
import CurrencySettings from './CurrencySettings';
import CookieSettings from './CookieSettings';
import PusherSettings from './PusherSettings';
import SEOSettings from './SEOSettings';
import '../App.css';

const Settings = () => {
  const [isBrandSettingsEnabled] = useState(false);
  const location = useLocation();

  return (
    <div className="settings">
      <nav>
        <ul>
          <li>
            {isBrandSettingsEnabled ? (
              <Link to="brand" className={location.pathname === "/settings/brand" ? "active" : ""}>Brand Settings</Link>
            ) : (
              <span>Brand Settings</span>
            )}
          </li>
          <li><Link to="system" className={location.pathname === "/settings/system" ? "active" : ""}>System Settings</Link></li>
          <li><Link to="currency" className={location.pathname === "/settings/currency" ? "active" : ""}>Currency Settings</Link></li>
          <li><Link to="cookie" className={location.pathname === "/settings/cookie" ? "active" : ""}>Cookie Settings</Link></li>
          <li><Link to="pusher" className={location.pathname === "/settings/pusher" ? "active" : ""}>Pusher Settings</Link></li>
          <li><Link to="seo" className={location.pathname === "/settings/seo" ? "active" : ""}>SEO Settings</Link></li>
        </ul>
      </nav>
      <div className="settings-content">
        <Routes>
          <Route path="/" element={<SystemSettings />} />
          <Route path="system" element={<SystemSettings />} />
          <Route path="currency" element={<CurrencySettings />} />
          <Route path="cookie" element={<CookieSettings />} />
          <Route path="pusher" element={<PusherSettings />} />
          <Route path="seo" element={<SEOSettings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Settings;