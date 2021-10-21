import { CheckBox } from '../../Elements/CheckBox/CheckBox';
import{EmailInput}from '../../Elements/EmailInput';
import {PasswordInput} from'../../Elements/PasswordInput';




export const RegisterForm = (props) => {
    const onSubmit = (event) => {
        event.preventDefault();
    
        const fd = new FormData(event.target);
        const loginData = {};
    
        for (let [inputName, value] of fd.entries()) {
          loginData[inputName] = value;
        }
    
        console.log(loginData);
    
        
      };

      return (
        <form onSubmit={onSubmit}>
          <div className="field">
            <EmailInput name="userEmail" />
          </div>
          <div className="field">
            <PasswordInput name="userPassword" />
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
    
