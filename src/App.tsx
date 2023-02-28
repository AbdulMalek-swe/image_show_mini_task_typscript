 
import React from 'react';
import './App.css';
import AuthProvider from './context/AuthProvider';
import ImageService from './pages/services/ImageService';
import Banner from './pages/shared/Banner';
import Navbar from './pages/shared/Navbar';
function App(): JSX.Element {
  return (
    <AuthProvider>
    
        <Navbar/>
        <Banner/>
        <ImageService/> 
       
    </AuthProvider>
    
    
       
   
  );
}

export default App;
