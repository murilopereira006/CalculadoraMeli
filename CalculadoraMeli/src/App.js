import React from 'react';
import Provider from './context/prividerIndex';
import Header from './componentes/Header';
import Form from './componentes/Inputs';
import Results from './componentes/Results';
import MarketPrice from './componentes/Concorrencia';
import './App.css';

function App() {

  return (
    <Provider>
      <Header />
      <Form />
      <Results />
      <MarketPrice />
    </Provider>
  );
}

export default App;