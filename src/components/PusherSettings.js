// src/components/PusherSettings.js
import React, { useState } from 'react';

const PusherSettings = () => {
  const [settings, setSettings] = useState({
    pusherAppId: '',
    pusherAppKey: '',
    pusherAppSecret: '',
    pusherAppCluster: ''
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
      <h2>Pusher Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="pusherAppId">Pusher App Id</label>
          <input
            type="text"
            id="pusherAppId"
            name="pusherAppId"
            value={settings.pusherAppId}
            onChange={handleChange}
            placeholder="Enter Pusher App Id"
          />
        </div>
        <div className="form-group">
          <label htmlFor="pusherAppKey">Pusher App Key</label>
          <input
            type="text"
            id="pusherAppKey"
            name="pusherAppKey"
            value={settings.pusherAppKey}
            onChange={handleChange}
            placeholder="Enter Pusher App Key"
          />
        </div>
        <div className="form-group">
          <label htmlFor="pusherAppSecret">Pusher App Secret</label>
          <input
            type="text"
            id="pusherAppSecret"
            name="pusherAppSecret"
            value={settings.pusherAppSecret}
            onChange={handleChange}
            placeholder="Enter Pusher App Secret"
          />
        </div>
        <div className="form-group">
          <label htmlFor="pusherAppCluster">Pusher App Cluster</label>
          <input
            type="text"
            id="pusherAppCluster"
            name="pusherAppCluster"
            value={settings.pusherAppCluster}
            onChange={handleChange}
            placeholder="Enter Pusher App Cluster"
          />
        </div>
        <button type="submit" className="save-button">Save Changes</button>
      </form>
    </div>
  );
};

export default PusherSettings;