import React from 'react';
import {Header} from './components/Header.js';
import {Balance} from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import {TranactionList} from './components/TranactionList';
import {Addtransaction} from './components/Addtransaction';
import './App.css';

import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      
      <div className="container">
      <div  >
        <Header />
      </div>
        <Balance />
        <IncomeExpenses />
        <TranactionList />
        <Addtransaction />
      </div>

    </GlobalProvider>
  );
}

export default App;
