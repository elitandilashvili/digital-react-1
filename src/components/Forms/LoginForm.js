import { useContext } from "react";
import { CheckBox } from '../../Elements/CheckBox/CheckBox';
import{EmailInput}from '../../Elements/EmailInput';
import {PasswordInput} from'../../Elements/PasswordInput';
import{AUTH_TOKEN} from "../../constants/Constants";
import{AuthContext} from "../../Providers/AuthProvider";


import react from "react";




export const LoginForm = () => {
  const { logIn } = useContext(AuthContext);
  
  


    const onSubmit = (event) => {
        event.preventDefault();
    
        const fd = new FormData(event.target);
        const loginData = {};
    
        for (let [inputName, value] of fd.entries()) {
          loginData[inputName] = value;
        }
    
        fetch(`${process.env.REACT_APP_API_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(loginData),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.token) {
            
              logIn(result.token);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
        
    

      return (
        <form onSubmit={onSubmit}>
          <div className="field">
            <EmailInput name="email" />
          </div>
          <div className="field">
            <PasswordInput name="password" />
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-success" type="submit">
                Login
              </button> <br/> <br/>
            </p>
           
             <form onSubmit={onSubmit}> 
             <CheckBox/>
              
            
              </form>

          </div>
        </form>
      );
    };
    

