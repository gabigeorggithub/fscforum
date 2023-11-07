import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Rotas from './Rotas/Rotas';
import { useState } from 'react';


// GABRIELA GEORG, EDUARDA, JÚLIA, MARIANA E PEDRO - 3AM

function App() {

  return (
    <>
    <ChakraProvider>
      <Rotas /> 
    </ChakraProvider>

    </>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Logen from './pages/Logen/Logen';
// import Register from './pages/Register/Register';
// import Home from './pages/Home/Home';
// import Comments from './pages/Comments/Comments';

// const  App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>          
//           <Route path='/' element={<Logen />} />
//           <Route path='/register' element={<Register />} />                  
//           <Route path='/dashboard' element={<Home />} />
//           <Route path='/comments/:id' element={<Comments />} />            
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;