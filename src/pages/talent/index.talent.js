import { Outlet, Route } from "react-router"
import { Page1 } from "./page1.talent"
import { Page2 } from "./page2.talent"
import { Page3 } from "./page3.talent"

export const  TalentRoutes=()=>{
    const  role=localStorage.getItem("role")
    const  talent=role==="talent"
    return(
        <>
        {talent &&<Route path="/talent" element={<Outlet/>}
        >
            <Route index element={<Page1/>} />
            <Route path="page2" element={<Page2/>} />
            <Route path="page3" element={<Page3/>} />
        </Route>}
        
        </>

    )
}