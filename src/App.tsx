import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Display from './components/Display/Display';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
   navigate('/display')
  }, [navigate])

  return (
    <div className="App">
      <Routes>
        <Route element={<Display />} path={"/display"}></Route>
      </Routes>
    </div>
  );
}

export default App;
