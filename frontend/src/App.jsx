import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



// AUTH PAGES

import Login from "./pages/Login";

import Signup from "./pages/Signup";



// STUDENT DASHBOARD

import StudentDashboard from "./pages/StudentDashboard";



// EDUCATION MODULE

import Class8Science from "./pages/Class8Science";

import Quiz from "./pages/Quiz";

import Certificate from "./pages/Certificate";



// EMPLOYABILITY MODULE

import GraphicDesign from "./pages/GraphicDesign";

import GraphicDesignQuiz from "./pages/GraphicDesignQuiz";

import SkillCertificate from "./pages/SkillCertificate";



// PROGRESS

import MyProgress from "./pages/MyProgress";



// ROLE DASHBOARDS

import TeacherDashboard from "./pages/TeacherDashboard";

import NgoDashboard from "./pages/NgoDashboard";

import RecruiterDashboard from "./pages/RecruiterDashboard";

import AdminDashboard from "./pages/AdminDashboard";



// AI MODULES

import AIRecommendations from "./pages/AIRecommendations";

import AIChatbot from "./pages/AIChatbot";



// OTHER FEATURES

import CareerRoadmap from "./pages/CareerRoadmap";

import ResumeBuilder from "./pages/ResumeBuilder";



function App() {

  return (

    <BrowserRouter>

      <Routes>



        {/* LOGIN */}

        <Route

          path="/"

          element={<Login />}

        />



        {/* SIGNUP */}

        <Route

          path="/signup"

          element={<Signup />}

        />



        {/* STUDENT DASHBOARD */}

        <Route

          path="/dashboard"

          element={<StudentDashboard />}

        />



        {/* NGO DASHBOARD */}

        <Route

          path="/ngo-dashboard"

          element={<NgoDashboard />}

        />



        {/* TEACHER DASHBOARD */}

        <Route

          path="/teacher-dashboard"

          element={<TeacherDashboard />}

        />



        {/* RECRUITER DASHBOARD */}

        <Route

          path="/recruiter-dashboard"

          element={<RecruiterDashboard />}

        />



        {/* ADMIN DASHBOARD */}

        <Route

          path="/admin-dashboard"

          element={<AdminDashboard />}

        />



        {/* CLASS 8 SCIENCE */}

        <Route

          path="/class8-science"

          element={<Class8Science />}

        />



        {/* SCIENCE QUIZ */}

        <Route

          path="/quiz"

          element={<Quiz />}

        />



        {/* SCIENCE CERTIFICATE */}

        <Route

          path="/certificate"

          element={<Certificate />}

        />



        {/* GRAPHIC DESIGN */}

        <Route

          path="/graphic-design"

          element={<GraphicDesign />}

        />



        {/* GRAPHIC DESIGN QUIZ */}

        <Route

          path="/graphic-design-quiz"

          element={<GraphicDesignQuiz />}

        />



        {/* SKILL CERTIFICATE */}

        <Route

          path="/skill-certificate"

          element={<SkillCertificate />}

        />



        {/* MY PROGRESS */}

        <Route

          path="/my-progress"

          element={<MyProgress />}

        />



        {/* AI RECOMMENDATIONS */}

        <Route

          path="/ai-recommendations"

          element={<AIRecommendations />}

        />



        {/* AI CHATBOT */}

        <Route

          path="/ai-chatbot"

          element={<AIChatbot />}

        />



        {/* CAREER ROADMAP */}

        <Route

          path="/career-roadmap"

          element={<CareerRoadmap />}

        />



        {/* RESUME BUILDER */}

        <Route

          path="/resume-builder"

          element={<ResumeBuilder />}

        />



      </Routes>

    </BrowserRouter>

  );

}



export default App;