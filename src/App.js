import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainScreen from './components/MainScreen';
import AllRoute from './components/AllRoute';
import Course from './components/Course';
import Record from './components/Record';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<MainScreen />} />
          <Route path='/olleroute' element={<AllRoute />} />
          <Route path='/course' element={<Course />} />
          <Route path='/record' element={<Record />} />
          {/* <MainScreen /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
