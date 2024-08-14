import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainScreen from './components/MainScreen';
import AllRoute from './components/AllRoute';
import Course from './components/Course';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<MainScreen />} />
          <Route path='/olleroute' element={<AllRoute />} />
          <Route path='/course' element={<Course />} />
          {/* <MainScreen /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
