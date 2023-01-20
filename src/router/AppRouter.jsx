import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/router/JournalRoutes"

export const AppRouter = () => {
  return (
    <Routes>
      {/* Login y Registrro */}
      <Route path="/auth/*" element={ <AuthRoutes/>}/>
      {/* JournalApp */}
      <Route path="/*" element={ <JournalRoutes/>}/>
      
    </Routes>
  )
}
