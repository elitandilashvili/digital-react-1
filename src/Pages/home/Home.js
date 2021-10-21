
// import { number } from "prop-types";
import{Counter}from "../../components/Counter/Counter";




const values = [100,200,500,];



export function Home(props){

    
    return(

      
        <div className="columns my-5 is-flex-direction-column">
          <h2 className="title">This is home Page</h2>

      {values.map((number) => {
            return <Counter initialValue={number} key={`number-${number}`} />;
      })}

       
    
        </div>

        

      
    )
}