import React from 'react';
import { Countries } from './components/Countries';
// import { Counter } from './features/counter/Counter';
import { Header } from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Countries />
    </div>
  );
}

export default App;
