import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import EmailTemplates from './components/EmailTemplates';
import NotificationTemplates from './components/NotificationTemplates';
import Settings from './components/Settings';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<EmailTemplates />} />
            <Route path="/notification-templates" element={<NotificationTemplates />} />
            <Route path="/settings/*" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;