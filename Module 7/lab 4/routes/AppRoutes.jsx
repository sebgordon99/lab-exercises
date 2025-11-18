import Homepage from "../pages/Homepage";
import AboutPage from "../pages/AboutPage";
import PageNotFound from "../pages/PageNotFound";
import DashboardPage from "../pages/DashboardPage";
import { Route, Routes } from "react-router";
import { DashboardMessages } from "../pages/DashboardPage";
import { DashboardTasks } from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import BitCoinPage from "../pages/BitCoinPage";


// special component containing all the possible routes for this app
// any props passed into AppRoutes will also be passed onto
// child components using {...props}
function AppRoutes(props) {
return (
<Routes>
{/* index matches on default/home URL: / */}
<Route index element={<Homepage {...props} />} />
{/* nested routes, matches on /dash/messages etc */}
<Route path='/login' element={<LoginPage {...props} />} />
<Route path='/bitcoin' element={<BitCoinPage {...props} />} />
<Route path="dash" element={<DashboardPage {...props} />}>
<Route path="messages" element={<DashboardMessages />} />
<Route path="tasks" element={<DashboardTasks />} />
</Route>
<Route path='/about' element={<AboutPage {...props} />} />
{/* special route to handle if none of the above match */}
<Route path="*" element={<PageNotFound />} />
</Routes>
)
}
export default AppRoutes;