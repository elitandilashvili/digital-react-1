import{Switch,Route} from "react-router";
import { LoginPage } from "./Pages/auth/LogIn";
import {Home} from "./Pages/home/Home";
import * as route from "./constants/routs";
import { RegisterForm } from "./components/Forms/RegisterForm";
import { PrivatePage } from "./Pages/private-page";
import {PrivateComponent} from "./Elements/private-component/PrivateComponent";




export function Routes(props){
    return(
       <Switch>
       <Route path={route.HOME_PATH} exact>
           <Home/>
       </Route>

       <Route path={route.LOGIN_PATH} >
           <LoginPage/>
       </Route>

       <Route path={route.REGISTER_PATH} >
           <RegisterForm/>
       </Route>

       <Route path={route.DOCUMENTATION_PATH} >
           <PrivateComponent 
           Component ={PrivatePage}
           title=" Secure Component"/>

     </Route>





       </Switch>
       
       );
}