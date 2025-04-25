import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import MusicPostsPage from './pages/MusicPostsPage'
import HomePage from './pages/HomePage'
import { useAuth } from './context/AuthContext';
import LoginPage from './pages/LoginPage';

export default function App() {
  const { token, logout } = useAuth();

  return (
    <>
      <nav>
        <Link to="/">Accueil</Link> | <Link to="/music-posts">Music posts</Link> |
        {token ? (
          <>
            <Link to="/users">Utilisateurs</Link> |
            <Link to="/dashboard">Dashboard</Link> |
            <button onClick={logout}>Se déconnecter</button>
          </>
        ) : (
          <Link to="/login"> Connexion</Link>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/music-posts" element={<MusicPostsPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  )
}