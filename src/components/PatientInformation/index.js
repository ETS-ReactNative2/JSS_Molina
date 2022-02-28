import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const PatientInformation = (props) => (
  <div>
    <h1>Patient Information</h1>
    <h3>
      <Text field={props.fields.firstName} />
      &nbsp;
      <Text field={props.fields.lastName} />
    </h3>
    <Text field={props.fields.dob} />
    <br />
    <Text field={props.fields.gender} />
    <br />
    <Text field={props.fields.phoneNumber} />
    <br />
  </div>
);

export default PatientInformation;
