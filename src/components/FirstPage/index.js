import React from 'react';
import { RichText, Text } from '@sitecore-jss/sitecore-jss-react';

const FirstPage = (props) => (
  <div>
    <Text field={props.fields.heading} />
    <RichText field={props.fields.content} />
  </div>
);

export default FirstPage;
