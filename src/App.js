import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import NoPage from "./pages/noPage/NoPage";
import { useRecoilState } from "recoil";
import TeamDashboard from "./pages/teamDashboard/TeamDashboard";
import "./App.css";
import { appState } from "./store/app";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/Signup";

function App() {
  const [appSetting] = useRecoilState(appState);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="team/:team/dashboard" element={<TeamDashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
