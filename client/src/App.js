import logo from './logo.svg';

import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Component/Header';


function App() {
  return (
    <div>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/practice" element={<Header/>}/>
    </Routes>
  </div>
  );
}

export default App;
