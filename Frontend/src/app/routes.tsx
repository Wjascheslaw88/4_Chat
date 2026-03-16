import { Route, Routes } from "react-router-dom"
import Registration from "../pages/Registration/RegistrationConteiner"
import NotFound from "../pages/Not-found/Not-found"
import ChatUsersConteiner from "../pages/ChatUsers/ChatUsersConteiner"


const Router = () => {


    return (
        <Routes>
            <Route path="/" element={<Registration />}></Route>
            <Route path="/:chatName/:userName" element={<ChatUsersConteiner />}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    )
}

export default Router;