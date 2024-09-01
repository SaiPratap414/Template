// src/components/CookieSettings.js
import React, { useState } from 'react';

const CookieSettings = () => {
  const [settings, setSettings] = useState({
    enableLogging: true,
    strictlyNecessaryCookies: true,
    cookieTitle: 'We use cookies!',
    cookieDescription: "Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it",
    strictlyCookieTitle: 'Strictly necessary cookies',
    strictlyCookieDescription: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
    contactUsDescription: 'For any queries in relation to our policy on cookies ar',
    contactUsURL: '#'
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prevSettings => ({
      ...prevSettings,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send settings to backend
    console.log('Saving settings:', settings);
  };

  return (
    <div className="settings-page">
      <h2>Cookie Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="enableLogging"
              checked={settings.enableLogging}
              onChange={handleChange}
            /> Enable logging
          </label>
          <span className="helper-text">After enabling logging, user cookie data will be stored in CSV file.</span>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="strictlyNecessaryCookies"
              checked={settings.strictlyNecessaryCookies}
              onChange={handleChange}
            /> Strictly necessary cookies
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="cookieTitle">Cookie Title</label>
          <input
            type="text"
            id="cookieTitle"
            name="cookieTitle"
            value={settings.cookieTitle}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cookieDescription">Cookie Description</label>
          <textarea
            id="cookieDescription"
            name="cookieDescription"
            value={settings.cookieDescription}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="strictlyCookieTitle">Strictly Cookie Title</label>
          <input
            type="text"
            id="strictlyCookieTitle"
            name="strictlyCookieTitle"
            value={settings.strictlyCookieTitle}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="strictlyCookieDescription">Strictly Cookie Description</label>
          <textarea
            id="strictlyCookieDescription"
            name="strictlyCookieDescription"
            value={settings.strictlyCookieDescription}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <h3>More Information</h3>
          <label htmlFor="contactUsDescription">Contact Us Description</label>
          <input
            type="text"
            id="contactUsDescription"
            name="contactUsDescription"
            value={settings.contactUsDescription}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactUsURL">Contact Us URL</label>
          <input
            type="text"
            id="contactUsURL"
            name="contactUsURL"
            value={settings.contactUsURL}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="save-button">Save Changes</button>
      </form>
      <button className="download-button">Download cookie accepted data</button>
    </div>
  );
};

export default CookieSettings;