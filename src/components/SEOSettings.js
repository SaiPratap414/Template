import React, { useState } from 'react';

const SEOSettings = () => {
  const [settings, setSettings] = useState({
    metaTitle: 'WorkDo Dash SaaS - Open Source ERP with Multi-Workspace',
    metaKeywords: 'WorkDo Dash,SaaS solution,Multi-workspace functionality,Cloud-based access,Scalability,Multi-addons,Collaboration tool,Data management,Business productivity,Customization',
    metaImage: '/path/to/image.jpg' // Default image path
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings(prevSettings => ({
      ...prevSettings,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Convert file to URL and set it in the state
      const imageUrl = URL.createObjectURL(file);
      setSettings(prevSettings => ({
        ...prevSettings,
        metaImage: imageUrl
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send settings to backend or handle them as needed
    console.log('SEO Settings submitted:', settings);
    alert('SEO Settings Saved');
  };

  return (
    <div className="seo-settings-container">
      <h2>SEO Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="metaTitle">Meta Title:</label>
          <input
            type="text"
            id="metaTitle"
            name="metaTitle"
            value={settings.metaTitle}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="metaKeywords">Meta Keywords:</label>
          <textarea
            id="metaKeywords"
            name="metaKeywords"
            value={settings.metaKeywords}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <div className="form-group">
          <label htmlFor="metaImage">Meta Image:</label>
          <input
            type="file"
            id="metaImage"
            name="metaImage"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {settings.metaImage && (
            <img
              src={settings.metaImage}
              alt="Meta Preview"
              style={{ width: '200px', marginTop: '10px' }}
            />
          )}
        </div>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default SEOSettings;
