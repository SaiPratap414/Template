import React, { useState } from 'react';
import '../App.css'; // Make sure to create this CSS file with the styles provided earlier

const CurrencySettings = () => {
  const [settings, setSettings] = useState({
    decimalFormat: '1.0',
    defaultCurrency: 'Rp - INR',
    decimalSeparator: 'Dot',
    thousandsSeparator: 'Dot',
    currencySymbolSpace: 'Without space',
    currencySymbolPosition: 'Pre',
    currencySymbolType: 'With Currency Name'
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
      <h2>Currency Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div>
            <label htmlFor="decimalFormat">Decimal Format</label>
            <select
              id="decimalFormat"
              name="decimalFormat"
              value={settings.decimalFormat}
              onChange={handleChange}
            >
              <option value="1.0">1.0</option>
              <option value="1.00">1.00</option>
              <option value="1.000">1.000</option>
            </select>
          </div>
          <div>
            <label htmlFor="defaultCurrency">Default Currency</label>
            <select
              id="defaultCurrency"
              name="defaultCurrency"
              value={settings.defaultCurrency}
              onChange={handleChange}
            >
              <option value="Rp - INR">Rp - INR</option>
              <option value="$ - USD">$ - USD</option>
              <option value="€ - EUR">€ - EUR</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div>
            <label htmlFor="decimalSeparator">Decimal Separator</label>
            <select
              id="decimalSeparator"
              name="decimalSeparator"
              value={settings.decimalSeparator}
              onChange={handleChange}
            >
              <option value="Dot">Dot</option>
              <option value="Comma">Comma</option>
            </select>
          </div>
          <div>
            <label htmlFor="thousandsSeparator">Thousands Separator</label>
            <select
              id="thousandsSeparator"
              name="thousandsSeparator"
              value={settings.thousandsSeparator}
              onChange={handleChange}
            >
              <option value="Dot">Dot</option>
              <option value="Comma">Comma</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div>
            <label>Currency Symbol Space</label>
            <div>
              <input
                type="radio"
                id="withSpace"
                name="currencySymbolSpace"
                value="With space"
                checked={settings.currencySymbolSpace === 'With space'}
                onChange={handleChange}
              />
              <label htmlFor="withSpace">With space</label>
              <input
                type="radio"
                id="withoutSpace"
                name="currencySymbolSpace"
                value="Without space"
                checked={settings.currencySymbolSpace === 'Without space'}
                onChange={handleChange}
              />
              <label htmlFor="withoutSpace">Without space</label>
            </div>
          </div>
          <div>
            <label>Currency Symbol Position</label>
            <div>
              <input
                type="radio"
                id="pre"
                name="currencySymbolPosition"
                value="Pre"
                checked={settings.currencySymbolPosition === 'Pre'}
                onChange={handleChange}
              />
              <label htmlFor="pre">Pre</label>
              <input
                type="radio"
                id="post"
                name="currencySymbolPosition"
                value="Post"
                checked={settings.currencySymbolPosition === 'Post'}
                onChange={handleChange}
              />
              <label htmlFor="post">Post</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div>
            <label>Currency Symbol & Name</label>
            <div>
              <input
                type="radio"
                id="withSymbol"
                name="currencySymbolType"
                value="With Currency Symbol"
                checked={settings.currencySymbolType === 'With Currency Symbol'}
                onChange={handleChange}
              />
              <label htmlFor="withSymbol">With Currency Symbol</label>
              <input
                type="radio"
                id="withName"
                name="currencySymbolType"
                value="With Currency Name"
                checked={settings.currencySymbolType === 'With Currency Name'}
                onChange={handleChange}
              />
              <label htmlFor="withName">With Currency Name</label>
            </div>
          </div>
        </div>
        <div className="preview">
          <p>Preview: INR10,000,0</p>
        </div>
        <button type="submit" className="save-button">Save Changes</button>
      </form>
    </div>
  );
};

export default CurrencySettings;