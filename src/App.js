import { Routes, Route } from 'react-router-dom'
import './App.css';
import Layout from './components/Layout';

import MyProfil from './components/routes/MyProfil';
import Missions from './components/routes/Missions';
import Rockets from './components/routes/Rockets';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<MyProfil />} />
        <Route path="missions" element={<Missions />} />
        <Route path="rockets" element={<Rockets />} />
      </Route>
    </Routes>
  );
}

export default App;
