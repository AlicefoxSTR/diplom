import {Routes, Route} from 'react-router-dom'
import { HomePage } from './pages/HomePage/components/HomePage/HomePage';
import './assets/styles/index.css'

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='*' element={<HomePage/>} />
      </Routes>
    </div>
  );
}

export default App;
