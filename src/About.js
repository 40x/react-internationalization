import React from 'react';
import { FormattedMessage } from "react-intl";

const About = () => (
  <div>
    <h2>
      <FormattedMessage
        id={ 'about.title' }
      />
    </h2>
  </div>
);

export default About;