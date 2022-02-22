import './App.css';

//Components
import Login from './components/Login';

//SPA
import { Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
