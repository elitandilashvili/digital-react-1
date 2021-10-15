import { FontColor } from "../helper/color";


const Color ={
    FirstPhone :"Black",
  
   
};

export const Phone = () => {
     return(
         <>
         <div className="table is-striped" className="is-variable is-2-mobile is-0-tablet is-3-desktop is-8-widescreen is-1-fullhd">
             <h2 className="column">Iphone    {FontColor  (Color)} </h2>
             <h2 className="column">Samsung    {FontColor  (Color)}</h2>
             <h2 className="column">LG         {FontColor  (Color)}</h2>
             <h2 className="column">Xiaomi     {FontColor  (Color)}</h2>
        </div>
        </>
     );
};

