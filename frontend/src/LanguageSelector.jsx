import React from 'react';
import { useLanguage } from '../LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ marginRight: '8px' }}>Pilih Bahasa:</label>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="id">Bahasa Indonesia</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
