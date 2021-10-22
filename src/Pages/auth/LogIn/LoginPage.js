import{LoginForm} from "../../../components/Forms/LoginForm";

export const LoginPage =(props) =>{
  return(
      <div className ="column column">

          <h2 className="title">Login Page </h2>
          <div className="column">
            <p className="title">For example</p>
             <code >
               
                 "email": "eve.holt@reqres.in","password": "cityslicka"
             </code>
          </div>
          
          <LoginForm/>
          

      </div>
  )
}