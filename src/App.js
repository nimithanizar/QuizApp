import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizApp from "./pages/quiz/quizApp";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<QuizApp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
