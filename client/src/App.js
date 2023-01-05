import Header from "./components/Header";
import Login from './components/Login';
import {Routes,Route} from 'react-router-dom';
import Register from "./components/Register";
import Profile from "./components/Profile"
import Error from "./components/Error";
import Headtail from "./components/Headtail";

function App() {
  return (
   <>
   <Header/>
   
   <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/headtail" element={<Headtail/>} />
    <Route path="*" element={<Error/>} />
   </Routes>
   
   </>
  );
}

export default App;
