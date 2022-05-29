import React from 'react';
import { Countries } from './components/Countries';
// import { Counter } from './features/counter/Counter';
import { Header } from './components/header';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import { DetailPage } from './components/DetailPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Countries />}/>
          <Route path='/details' element={<DetailPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
