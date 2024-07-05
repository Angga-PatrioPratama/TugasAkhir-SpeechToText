import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import SpeechTt from './SpeechTt/SpeechTt'
import TextTs from './TextTs/TextTs'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/SpeechTt" element={<SpeechTt />} />
                <Route path="/TextTs" element={<TextTs />} />
            </Routes>
        </Router>
    )
}
export default App