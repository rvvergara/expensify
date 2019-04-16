import React from 'react';

export default (props) => {
  const { id } = props.match.params;
  return (
    <div>
    Editing expense no.: 
{' '}
{ id }
    </div>
  );
};
