import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Box className="box" width="400px" sx={{ width: { xl: '1488px', xs: '100%', sm: '600px', md: '800px' }}} m="auto" >
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exercise/:id' element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
