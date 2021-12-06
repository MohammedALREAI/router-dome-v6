import { Outlet, Route } from "react-router"
import { Page1 } from "./page1.admin"
import { Page2 } from "./page2.admin"
import { Page3 } from "./page3.admin"

export const  AdminRoutes=()=>{
    const  role=localStorage.getItem("role")
    const  admin=role==="admin"
    return(
        <>
        {admin &&  <Route path="/admin" element={<Outlet/>}
        >
            <Route index element={<Page1/>} />
            <Route path="page2" element={<Page2/>} />
            <Route path="page3" element={<Page3/>} />
        </Route>}
        
        </>

    )
}