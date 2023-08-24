import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import {BrowserRouter ,Routes,Route}from 'react-router-dom'
import { Image } from './fileupload';
import { Fileget } from './fileget';
import { Login } from './login';
import { Singup } from './singup';
import { Base64 } from './convertbase64';
function App() {
  return (
    <div className="App">
  <h2>
    react
  </h2>
  <BrowserRouter>
  <Routes>
 <Route path="/" element={<Image/>}></Route>
 <Route path="/F" element={<Fileget/>}></Route>
 <Route path="/login" element={<Login/>}></Route>
 <Route path='/s' element={<Singup/>}></Route>
 <Route path='/v' element={<Base64/>}></Route>
</Routes>

  </BrowserRouter>



    </div>
  );
}

export default App;
