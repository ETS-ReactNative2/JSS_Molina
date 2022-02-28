import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const SkillLists = (props) => {
  const listOfDomain = props.fields.items;
  return (
    <div>
      {listOfDomain &&
        listOfDomain.map((listItem, index) => (
          <div key={`skils-${index}`}>
            {
              <h6>
                {index + 1} . <Text field={listItem.fields.heading} />
              </h6>
            }
          </div>
        ))}
    </div>
  );
};

export default SkillLists;
