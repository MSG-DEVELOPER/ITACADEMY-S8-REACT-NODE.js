import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import MapPage from "../pages/MapPage/MapPage";
import GraficPage from "../pages/GraficPage/GraficPage";
import CalendarPage from "../pages/CalendarPage/CalendarPage";
import ModifyUserPage from "../pages/ModifyUserPage/ModifyUserPage";


function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/map" element={<MapPage />}></Route>
        <Route path="/grafic" element={<GraficPage />}></Route>
        <Route path="/calendar" element={<CalendarPage />}></Route>
        <Route path="/modifyUser/:userId" element={<ModifyUserPage/>}> </Route>
      </Routes>
  )
}

export default AppRoutes