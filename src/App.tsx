import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import MusicPostsPage from './pages/MusicPostsPage'
import HomePage from './pages/HomePage'

function App() {

  return (
    <>
      <nav>
        <Link to="/">Accueil</Link> | <Link to="/music-posts">Music posts</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/music-posts" element={<MusicPostsPage />} />
      </Routes>
    </>
  )
}

export default App
