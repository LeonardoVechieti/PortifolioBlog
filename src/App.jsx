import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';

//import o contexto
import { AuthProvider, useAuthValue } from './context/AuthContext';
//importa os hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

//compentes e views
import Home from './views/Home'
import About from './views/About'
import NotFound from './views/NotFound'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Login from './views/Login';
import CreatePost from './views/CreatePost';
import Dashboard from './views/Dashboard';
// import Loading from './views/Loading';
import Blog from './views/Blog';
import Register from './views/Register';
import Search from './views/Search';
import Posts from './views/Posts';
import Portifolio from './views/Portifolio';

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            {/* Rotas publicas */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portifolio" element={<Portifolio />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/search" element={<Search />} />
            {/* <Route path="/blog/posts/:id" element={<Posts/>} /> */}
            <Route path="/blog/:id" element={<Posts />} />
            {/* Rotas privadas */}
            <Route path="/posts/create" element={user ? <CreatePost /> : <Navigate to="/login" />} />
            <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
            <Route path="/register" element={user ? <Register /> : <Navigate to="/login" />} />
            {/* Rotas de erro */}
            <Route path="*" element={<NotFound />} />
            <Route path="/404" element={<NotFound />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>

  )
}

export default App

//comando para intalar o react-router-dom
//npm install react-router-dom
//npm install @types/react-router-dom -D
//alternativo
//npm install react-router-dom localforage match-sorter sort-by
//comando para inatalr o styled-components
//npm install styled-components
//alterntivo
//yarn add styled-components
//comando para instalar o firebase
//npm install firebase
//comando para instalar o react-firebase-hooks
//npm install react-firebase-hooks
//comando para instalar o react-markdown
//npm install react-markdown
//comando para instalar o react-syntax-highlighter
//npm install react-syntax-highlighter
