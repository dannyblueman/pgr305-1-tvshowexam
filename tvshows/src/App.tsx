import React, { FC } from 'react';
import { TvshowProvider } from './contexts/TvshowContext';
import Routing from './routing/Routing';
import 'bootstrap/dist/css/bootstrap.min.css';

const App:FC = () => {
  return (
    <div className="App">
      <TvshowProvider>
        <Routing/>
      </TvshowProvider>
    </div>
  );
}

export default App;
