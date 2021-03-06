import PropTypes from "prop-types"

import { useState } from "react";






export function Counter ({ initialValue }){
    
    const [count,setCount] = useState(initialValue);
    

    const addNumber =() =>{
        setCount (count + 1);
    };
    const resetNumber =() =>{
        setCount(0);
    };

    const subtractNumber =() =>{
       setCount (count - 1);
    };

  
    const handleClick = (value) => {
        setCount(count + value);
      };
    


    return(
        <div className="columns">
            <div className="column">
                <h2 className ="is-size-4"> Magazine Counter {count}</h2>
            </div>

            <div className="column">
                <button className="button is-primary" onClick={addNumber}>
                    +
                </button>
                
                <button className="button is-yellow mx-2" onClick={resetNumber } >
                    0
                </button>
                
                <button className="button is-warning" onClick={subtractNumber}>
                    -
                </button>
            </div>

            <div className="column">
        <button className="button is-link" onClick={() => handleClick(4)}>
          +3
        </button>
        
        <button className="button is-danger mx-2" onClick={resetNumber}>
          0
        </button>
        <button className="button is-link" onClick={() => handleClick(-3)}>
          -3
        </button>
        
      </div>
          
          

        </div>
    )
}

Counter.defaultProps = {
    initialValue: 0,
  };
  
  Counter.propTypes = {
    initialValue: PropTypes.number.isRequired,
  };