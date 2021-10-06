

export const Android = (props)=>{
    console.log(props)

 return (
     <div className="div">
         <h2 className="phone">Android {props.name} </h2> 
         {props.children}
     </div>
    
 ) 

};
 