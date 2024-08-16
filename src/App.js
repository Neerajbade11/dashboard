import { Routes, Route } from 'react-router-dom';

import { EcommerceProvider } from './components/EcommerceContext';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import AddWidget from './components/AddWidget';
import './App.css';

const App = () => {
  

  

  return (
    <EcommerceProvider>
      <AddWidget/>
      <Header  />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/dashboard' element={<Dashboard  />} />
      </Routes>
  </EcommerceProvider>
  )
}


export default App;
