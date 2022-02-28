import React from 'react';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';

const PrescriptionDetails = (props) => (
  <div>
    <h1>Prescription Details</h1>
    <Text field={props.fields.patientName} />
    <br />
    <Text field={props.fields.patientAge} />
    <br />
    <RichText field={props.fields.patientPrescription} />
    <br />
  </div>
);

export default PrescriptionDetails;
