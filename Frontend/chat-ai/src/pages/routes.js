import { Route, Routes } from "react-router-dom"
import ChatUser from "./Chat_users/Chat_users"
import Registration from "./Registration/Registration"
import PageNotFound from "./Page_not_found/Page_not_found"


const Router=()=> {
    return (
        <Routes>
            <Route path="/" element={<Registration />}></Route>
            <Route path="/:chatName" element={<ChatUser />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
    )
}

export default Router;