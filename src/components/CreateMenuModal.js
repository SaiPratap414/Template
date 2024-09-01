import React, { useState } from 'react';

function CreateMenuModal({ onClose }) {
  const [pageName, setPageName] = useState('');
  const [pageDescription, setPageDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { pageName, pageDescription });
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Create New Menu</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="pageName">Page Name</label>
            <input
              id="pageName"
              type="text"
              value={pageName}
              onChange={(e) => setPageName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="pageDescription">Page Short Description</label>
            <textarea
              id="pageDescription"
              value={pageDescription}
              onChange={(e) => setPageDescription(e.target.value)}
              required
            />
          </div>
          <div className="form-buttons">
            <button type="submit">Create</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateMenuModal;