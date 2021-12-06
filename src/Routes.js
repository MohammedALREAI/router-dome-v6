

import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import { AdminRoutes } from "./pages/admin/index.emapler";
import { EmployerRoutes } from "./pages/employer/index.emapler";
import { TalentRoutes } from "./pages/talent/index.talent";
import { Home } from "./pages/shared/home";
import SharedPage from "./pages/shared/sharedPage";

export const  roles=['admin','employer','talent ']

export  const AllRoutes=()=>{
    const  role=localStorage.getItem("role")
    const  isShared=role==="admin" || role==="employer"

return(
    <Routes>    

        <Route path={'/shared'} element={
            (()=>isShared?<SharedPage/>
            : <div>
            You are not admin   or   employer
        </div>)()
        }/>
        <Route index path={'/'} element={<Home/>}/>
        {TalentRoutes()}
    
        {EmployerRoutes()}

        {AdminRoutes()}
        <Route path={'*'} element={<div>page  not  founs 404 </div>}/>

        </Routes>
)

}