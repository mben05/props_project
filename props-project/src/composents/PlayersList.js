import React from "react";
import Player from "./Player";
import MyArry from "./Joueurs";


function PlayerList() {

  return( 
   <div>
    {
      MyArry.map((Array,index)=> {
        return (
          <Player key={index} {...Array} />);
      }
      )
    };
    

   </div>
    
  )
  
};

export default PlayerList;
