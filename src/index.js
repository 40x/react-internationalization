import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { IntlProvider, addLocaleData } from 'react-intl';

import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import localeData from './translations/locales';

// to support pluralization and relative time formatting
addLocaleData([...en, ...fr]);

// default locale
let defaultLocale = 'en';

// create custom formats
const formats = {
  number: {
    USD: {
      style: 'currency',
      currency: 'USD'
    }
  }
};

// setup application
const setLocale = (lang) => {
  const messages = localeData[lang];

  ReactDOM.render(
    // pass locale, locale messages and any custom formats
    <IntlProvider locale={lang} messages={messages} formats={formats}>
      <Router>
        <div>
          <button onClick={() => setLocale('en')}>EN</button>
          <button onClick={() => setLocale('fr')}>FR</button>
          <App />
        </div>
      </Router>
    </IntlProvider>,
    document.getElementById('root')
  );  
}

// initialize application
setLocale(defaultLocale);
