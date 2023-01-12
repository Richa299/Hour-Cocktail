import { useState } from "react"

function Cocktail(){
    const [allResponse, setAllResponse]=useState([]);
    const [infinite, setInfinite]=useState(false);
    const [id, setId]=useState('');
    const [name, setName]=useState('');
    const names=[];
    const finals=[];

    if(!infinite){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then(res=>res.json())
    .then(data=>{
        // console.log(data)
        for(let index in data){
            names.push(data)
        }
    }
    ) 

    setAllResponse(()=>{
      for(let i=0;i<25;i++){
        finals.push(names[0])
        console.log(names)
      }
    })
    setInfinite(true);
    }
return(
    <div>
         {
                allResponse &&(
                allResponse.map(data=>{
                    return(
                        <>
                        <h3>{data}</h3>
                        {/* <h3>{data.message}</h3> */}
                        </>
                    )
                })
                )
            }
    </div>
)
        }
export default Cocktail