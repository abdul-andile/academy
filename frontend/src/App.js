import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import TVCourseSection from "./pages/TVCourseSection";
function App() {
  return (
    <Routes>
      <Route path="/" element={<TVCourseSection />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/navigate" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
