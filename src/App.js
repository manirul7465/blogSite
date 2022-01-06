import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Registration from './Registration/Registration';
import Login from './Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllBlogs from './Allblogs/AllBlogs';
import Home from './Home/Home';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/allblogs" element={<AllBlogs/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path={"/registration"} element={<Registration/>}/>
          
        </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
