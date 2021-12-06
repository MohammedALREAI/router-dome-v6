import { Outlet, Route } from "react-router"
import { Page1 } from "./page1.employer"
import { Page2 } from "./page2.employer"
import { Page3 } from "./page3.employer"

export const  EmployerRoutes=()=>{
    const  role=localStorage.getItem("role")
    const  employer=role==="employer"
    return(
        <>
        {employer && <Route path="/employer" element={<Outlet/>}
        >
            <Route index element={<Page1/>} />
            <Route path="page2" element={<Page2/>} />
            <Route path="page3" element={<Page3/>} />
        </Route>}
        
        </>

    )
}