import React from 'react';
import { FormattedMessage, FormattedDate, FormattedNumber, } from 'react-intl';

const Home = () => {
  const date = new Date();
  const number = 1000000;
  const currency = 10000;
  return (
    <div>
      <div>
        <FormattedMessage id="home.date" /> <FormattedDate value={date}/>
      </div>
      <div>
        <FormattedMessage id="home.number"/> <FormattedNumber value={number}/>
      </div>
      <div>
        <FormattedMessage id="home.currency" /> <FormattedNumber value={currency} format='USD'/>
      </div>
    </div>
  );
};

export default Home;
