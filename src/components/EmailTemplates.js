import React, { useState } from 'react';
import CreateMenuModal from './CreateMenuModal';

function EmailTemplates() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [templates, setTemplates] = useState([
    { id: 1, name: 'Customer Invoice Send', module: 'General' },
    { id: 2, name: 'Payment Reminder', module: 'General' },
    { id: 3, name: 'Invoice Payment Create', module: 'General' },
  ]);

  return (
    <div className="email-templates">
      <h1>Email Templates</h1>
      <button onClick={() => setIsModalOpen(true)}>Create New Menu</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Module</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {templates.map(template => (
            <tr key={template.id}>
              <td>{template.name}</td>
              <td>{template.module}</td>
              <td><button className="view-button">View</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && <CreateMenuModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default EmailTemplates;