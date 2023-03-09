import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Landing,
  Home,
  Profile,
  LearnStrategy,
  Rules,
  Tutorials,
  About,
  Main,
  Register,
  Play,
  ProtectedRoute,
  Settings,
} from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/rules" element={<Rules />} />
          <Route path="/strategy" element={<LearnStrategy />} />
          <Route path="/practice" element={<Tutorials />} />
          <Route path="/play" element={<Play />} />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
