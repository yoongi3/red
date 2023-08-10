import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import EventPage from "./pages/EventPage.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/event" element={<EventPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;