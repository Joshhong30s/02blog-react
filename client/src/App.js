import Home from './pages/home/Home'
import Topbar from './components/topbar/Topbar'
import Single from '../src/pages/single/Single'
import Write from './pages/write/Write'
import Setting from './pages/setting/Setting'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Errorpage from './pages/errorpage/Errorpage'
import { useContext } from 'react'
import { Context } from './context/Context'

function App() {
  const { user } = useContext(Context)
  return (
    <Router>
      <Topbar></Topbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route
          path='/login'
          element={user ? <Navigate to='/' /> : <Login />}
        ></Route>
        <Route
          path='/register'
          element={user ? <Navigate to='/' /> : <Register />}
        />
        <Route
          path='/setting'
          element={user ? <Setting /> : <Navigate to='/login' />}
        />
        <Route
          path='/write'
          element={user ? <Write /> : <Navigate to='/login' />}
        />
        <Route path='/post/:postId' element={<Single />} />
        <Route path='*' element={<Errorpage />} />
      </Routes>
    </Router>
  )
}

export default App
