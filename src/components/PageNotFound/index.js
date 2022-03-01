import React from 'react';
import { RichText } from '@sitecore-jss/sitecore-jss-react';

const PageNotFound = (props) => {
  console.log(props);
  return (
    <div>
      <h1>404</h1>
      <RichText field={props.fields.Message} />
    </div>
  );
};
export default PageNotFound;
