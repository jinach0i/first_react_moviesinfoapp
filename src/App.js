import Home from './routes/Home';
import Detail from './routes/Detail';
import './App.css';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Detail />} />
        </Routes>
  )
}


export default App;
