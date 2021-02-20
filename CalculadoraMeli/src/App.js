import React from 'react';
import Provider from './context/prividerIndex';
import Header from './componentes/Header';
import Form from './componentes/Inputs';
import ShowResults from './componentes/ShowResults';
import './App.css';

function App() {

  return (
    <Provider>
      <Header />
      <Form />
      <ShowResults />
    </Provider>
  );
}

export default App;