import React from 'react';

import AppContext from './AppProvider';

export function withContext(WrappedComponent) {
  return (props) => (
    <AppContext.Consumer>
      {(context) => (
        <WrappedComponent 
          context={context}
          {...props}
        />
      )}
    </AppContext.Consumer>
  );
};