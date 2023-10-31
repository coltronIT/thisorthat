import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Poll from './pages/Poll';
import Results from './pages/Results';
import Home from './pages/Home';


const App = () => (
  <Router>
    <Routes>
      <Route path="/poll" element={<Poll />} />
      <Route path="/results" element={<Results />} />
      <Route path="/" exact element={<Home />} />
    </Routes>
  </Router>
)

export default App;
