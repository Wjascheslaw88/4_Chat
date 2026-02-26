import { Route, Routes } from "react-router-dom"
import Chat_user from "./Chat_users/Chat_users"



export default function Router() {
    return (
<Routes>
<Route path="/" element={<Chat_user/>}></Route>


</Routes>
    )
}

