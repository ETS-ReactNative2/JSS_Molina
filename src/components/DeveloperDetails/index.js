import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const DeveloperDetails = (props) => (
  <div>
    <h1>
      <Text field={props.fields.devName} /> Details{' '}
    </h1>
    <Text field={props.fields.devId} />
    <br />
    <Text field={props.fields.devExperience} />
  </div>
);

export default DeveloperDetails;
