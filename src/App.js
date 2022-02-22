import "./App.css";

//Components
import Login from "./components/Login";
import Chats from "./components/Chats";

//context
import AthContextProvider from "./Context/AthContextProvider";

//SPA
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AthContextProvider>
        <Routes>
          <Route path="/chats" element={<Chats />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </AthContextProvider>
    </div>
  );
}

export default App;
