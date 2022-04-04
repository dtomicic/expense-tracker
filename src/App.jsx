import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import  IncEx  from './components/IncEx';
import  TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncEx />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
