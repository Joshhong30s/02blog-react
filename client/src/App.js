import Home from './pages/home/Home'
import Topbar from './components/topbar/Topbar'
import Single from '../src/pages/single/Single'
import Write from './pages/write/Write'
import Setting from './pages/setting/Setting'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Errorpage from './pages/errorpage/Errorpage'

function App() {
  const user = false
  return (
    <Router>
      <Topbar></Topbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={user ? <Home /> : <Login />}></Route>
        <Route
          path='/register'
          element={user ? <Home /> : <Register />}
        ></Route>
        <Route
          path='/setting'
          element={user ? <Setting /> : <Register />}
        ></Route>
        <Route path='/write' element={user ? <Write /> : <Login />}></Route>
        <Route path='/post/:postId' element={<Single />}></Route>
        <Route path='*' element={<Errorpage />}></Route>
      </Routes>
    </Router>
  )
}

export default App
