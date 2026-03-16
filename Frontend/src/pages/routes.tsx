import { Route, Routes} from "react-router-dom"
import ChatUserC from "./Chat_users/Chat_usersC"
import Registration from "./Registration/RegistrationC"
import PageNotFound from "./Page_not_found/Page_not_found"


const Router = () => {


    return (
        <Routes>
            <Route path="/" element={<Registration />}></Route>
            <Route path="/:chatName/:userName" element={<ChatUserC name={""}/>}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
    )
}

export default Router;