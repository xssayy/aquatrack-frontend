import { useState, useEffect } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      setLanguage(savedLanguage);
    }
  }, [i18n]);

  const handleSelect = eventKey => {
    setLanguage(eventKey);
    i18n.changeLanguage(eventKey);
    localStorage.setItem('language', eventKey);
  };

  return (
    <DropdownButton
      id="dropdown-language-button"
      title={language === 'en' ? 'En' : 'Ua'}
      onSelect={handleSelect}
    >
      <Dropdown.Item eventKey="en">En</Dropdown.Item>
      <Dropdown.Item eventKey="ua">Ua</Dropdown.Item>
    </DropdownButton>
  );
};

export default LanguageSelector;
