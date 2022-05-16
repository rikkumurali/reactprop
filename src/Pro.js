import React,{useState} from 'react';

const Pro = () => {
    const [name,setName] = useState("")
    

    
 return <>
    <div>
      <h1>Name :{name}</h1>
   
        <button onClick={()=>name ? setName("RIKKUZ"):setName("rikku muralidharan")}>CLICK</button> 
      </div>

  </>
};

export default Pro;
