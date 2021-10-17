import { useState,useEffect} from "react";

export function CheckBox (){
    const [Text,setText] = useState ("");
    const [Gender, setGender]= useState("");
    
    const [TnC, setTnC] = useState(false);
    console.warn("all data",Text,Gender,TnC)

    return(
        
      <form>
           <label class="checkbox">
              <input type="checkbox" onChange={(event)=>setTnC(event.target.checked
                )}/>
                  I agree to the <a href="#">terms and conditions</a>
              </label> <br/><br/>
                
                <input type="text" 
                placeholder="Gender"
                onChange={(event)=>setText(event.target.value
                )}/> 

                <select onChange={(event)=>setGender(event.target.value
                )} >
                   <option >Male</option>
                   <option >Female</option>
  
                </select>
               
      </form>
         
    )


   
}