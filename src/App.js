
import './App.css';
import Home from './routes/Home';
import { Route, Routes } from 'react-router-dom';
import Service from './routes/Service';
import Contact from './routes/Contact';
import About from './routes/About';
import Navbar from'./Components/Navbar';

function App() {
  return (
     <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      <Navbar/>
     </div>
  );
}

export default App;
