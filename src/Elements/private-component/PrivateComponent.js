
import{Redirect} from "react-router-dom";
import{HOME_PATH} from "../../constants/routs";


export const PrivateComponent=({Component, ...props})=>{
    const LoggedIn= true;

   return LoggedIn  ? <Component {...props}/> :<Redirect to={HOME_PATH}/>;
};

