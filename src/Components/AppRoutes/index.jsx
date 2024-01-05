import {  Route, Routes ,Navigate} from "react-router-dom";
import Customers from "../../Pages/Customers";
import Dashboard from "../../Pages/Dashbaord";
import Inventory from "../../Pages/Inventory";
import Orders from "../../Pages/Orders";
import Company from "../../Pages/Company";
import Projects from "../../Pages/Projects";
import Users from "../../Pages/Users";
import SignIn from "../../SiginIn";
import Callback from "../../Callback";


function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<SignIn />}></Route>
      <Route path="/callback" element={<Callback />}></Route>
    

      <Route path="/dashboard" element={<Dashboard />}></Route>
     
      <Route path="/company" element={<Company/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/users" element={<Users/>}></Route>
    </Routes>
  );
}
export default AppRoutes;
