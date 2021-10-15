import { useState, useEffect } from "react"


export const LoginForm =(props)=>{
    
    const [email,setEmail]= useState("");
    const [emailError,setEmailError]=useState(false);
    const [password,setPassword]= useState("");
    const [passwordError,setPasswordError]=useState(false);

    useEffect(()=>{
        if (email && email.length < 10){
            setEmailError(true);
        }
        else if (email && email.length >10) {
            setEmailError(false);
        }},[email]);

    useEffect(()=>{
        if (password && password.length < 6){
            setPasswordError(true);
        }
        else if (password && password.length >6) {
            setPasswordError(false);
        }},

    [password]);

    const getClassName=(inputType ="email") => {
        let errorClassName= "input";

        switch(inputType){
            case "email":
            if (emailError && email) {
                errorClassName += "is-danger";
            }
            else if(!emailError && email){
                errorClassName += "is-success";
            }
            return errorClassName;

            case "password":
                if (passwordError && password) {
                    errorClassName += "is-danger";
                }
                else if(!passwordError && password){
                    errorClassName += "is-success";
                }

               return errorClassName;
                default:
                    return errorClassName;



    
          
            
        };
        


    //     if (emailError && email) {
    //         errorClassName += "is-danger";
    //     }
    //     else if(!emailError && email){
    //         errorClassName += "is-success";
    //     }

    //     return errorClassName;
        
    // };
    
    
    

    

    const onSubmit=(event)=>{

        event.preventDefault();

        const loginData={
            email,
            password,
        }
    
        console.log(loginData);
    };
    

    
    
    
    return(
        <form onSubmit={onSubmit}>
        <div className="field">
        <p className="control has-icons-left has-icons-right">
      <input 
       className={getClassName("email")}
       type="email"
       placeholder="Email"
        name="email"
       autoComplete="new-email"
       value={email}
        onChange={({target}) => setEmail(target.value)
     }
       
    
    />
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>

    {!emailError && email && <span className="icon is-small is-right">
      <i className="fas fa-check"></i>
    </span>}

    {emailError && email && <span className="icon is-small is-right">
          <i className="fas fa-exclamation-triangle" />
    </span>}
  </p>
</div>


<div className="field">
  <p className="control has-icons-left">
    <input 
    className={getClassName("password")} 
    type="password"
    autoComplete="new-password"
    placeholder="Password"
    name="Password"
    onChange={({target})=>setPassword(target.value)}
     />
    <span className="icon is-small is-left">
      <i className="fas fa-lock"></i>
    </span>
    {!passwordError && password && <span className="icon is-small is-right">
      <i className="fas fa-check"></i>
    </span>}

    {passwordError && password && <span className="icon is-small is-right">
          <i className="fas fa-exclamation-triangle" />
    </span>}
  </p>
</div>
<div className="field">
  <p className="control">
    <button className="button is-success">
      Login
    </button>
  </p>
</div>
        </form>
    
    );
};}