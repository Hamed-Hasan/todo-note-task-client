import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import CompletedTask from './components/CompletedTask';
import Calender from './components/Calender';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/complete' element={<CompletedTask />}></Route>
        <Route path='/cal' element={<Calender />}></Route>
      </Routes>
    </div>
  );
}

export default App;
