// src/components/SystemSettings.js
import React, { useState } from 'react';
import '../App.css';

const SystemSettings = () => {
  const [settings, setSettings] = useState({
    defaultLanguage: 'English',
    defaultTimezone: '(GMT+5:30) Asia/Kolkata (India Standard Time)',
    dateFormat: 'DD-MM-YYYY',
    timeFormat: '10:30 PM'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings(prevSettings => ({
      ...prevSettings,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send settings to backend
    console.log('Saving settings:', settings);
  };

  return (
    <div className="settings-page">
      <h2>System Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="defaultLanguage">Default Language</label>
          <select
            id="defaultLanguage"
            name="defaultLanguage"
            value={settings.defaultLanguage}
            onChange={handleChange}
          >
            <option value="English">English</option>
            {/* Add more language options */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="defaultTimezone">Default Timezone</label>
          <select
            id="defaultTimezone"
            name="defaultTimezone"
            value={settings.defaultTimezone}
            onChange={handleChange}
          >
            <option value="(GMT+5:30) Asia/Kolkata (India Standard Time)">(GMT+5:30) Asia/Kolkata (India Standard Time)</option>
            {/* Add more timezone options */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="dateFormat">Date Format</label>
          <select
            id="dateFormat"
            name="dateFormat"
            value={settings.dateFormat}
            onChange={handleChange}
          >
            <option value="DD-MM-YYYY">DD-MM-YYYY</option>
            {/* Add more date format options */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="timeFormat">Time Format</label>
          <select
            id="timeFormat"
            name="timeFormat"
            value={settings.timeFormat}
            onChange={handleChange}
          >
            <option value="10:30 PM">10:30 PM</option>
            {/* Add more time format options */}
          </select>
        </div>
        <button type="submit" className="save-button">Save Changes</button>
      </form>
    </div>
  );
};

export default SystemSettings;