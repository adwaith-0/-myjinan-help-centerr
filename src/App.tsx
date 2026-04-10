import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GradientChatApp from './demo'
import UserStoriesPage from './components/UserStoriesPanel'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GradientChatApp />} />
        <Route path="/user-stories" element={<UserStoriesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
