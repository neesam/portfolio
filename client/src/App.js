import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Main/>}/>
            {/* <Route path="/work" element={<Work/>}/> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
