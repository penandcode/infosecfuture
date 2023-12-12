import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPage from './components/Register/RegisterPage';
import LoginPage from './components/Register/LoginPage';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
