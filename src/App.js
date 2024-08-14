import { Routes, Route } from 'react-router-dom';
import { EcommerceProvider } from './components/EcommerceContext';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import AddWidget from './components/AddWidget';
import './App.css';

const App = () => 
  <EcommerceProvider>
    <AddWidget/>
    <Header/>
    <Routes>
      <Route path='/dashboard' Component={Dashboard} />
    </Routes>
  </EcommerceProvider>


export default App;
