import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

export function App() {
  return (
    <Button variant="contained" color="primary">
      Hola Mundo!
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));