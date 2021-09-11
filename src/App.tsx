import React from 'react';
import Textfield from './Textfield';

const App: React.FC = () => {
  return (
    <div>
      <Textfield
        text='hello'
        person={{firstName: '', lastName: ''}}
      />
    </div>
  );
}

export default App;
