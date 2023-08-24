import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import './fileupload.css'
export const Fileget = () => {
    ///its a component that   u can render the data in Ui that come from backend

    const [data, setdata] = useState([]);
const[video,setvideo]=useState({})


    useEffect(() => {

getvideo();

      // console.log(data);

   
},[])

    function getvideo(){
        axios  .get('http://localhost:5000/video  ')
        .then( async function(response) {
            // console.log(response.data);
           
            setdata(response.data)

            // convert buffer array to base64 and save in video state
            const b=()=>{
                data.map((singledata)=>      {

                
                const base64string = btoa  (String.fromCharCode(...new Uint8Array(singledata.file.data.data))
                );
                console.log(base64string);
             
                setvideo(base64string)
                
            })
            
            }
b()
console.log('ffff',video);
console.log('data',data);

        } )
         .catch(function(err){
            console.log(err, 'it hass error');
} )
    }
   
     


    return (
        <Fragment>
          <div>
<h1>hiiiiiiiiiiiiii</h1>


{
    data.map((singledata)=>
    

   

      <h1>{singledata.Description} </h1>
    
    
    
    
           )
           
 
}
  {/* video.map is a problem i can't map to image src */}
  {
    
    video.map((e)=>
    <img src={`data:image/png;base64,${e.file}`} alt="" />

    )
  
  }
       </div>
                
   
    
       <img id=' hi'src="data:image/png;base64,ZmlsZV8xNjkyNzY4MTk0MTc2LmpwZw==" alt="Red dot" />

</Fragment>
)
}
       
    // this all below codes are different methods to convert buffer array to  base64 data type

               

              
{/* 
                {
                    data.map((singledata) => {
                        const base64string = btoa  (String.fromCharCode(...new Uint8Array(singledata.file.data.data))
                        );

                //    return     <img src={URL.revokeObjectURL(`data:image/jpeg;base64,${base64string}`)} />
             

return   <img src={`data:image/png;base64,${base64string}`} alt="" />
           */}
{/*            
            //  <h2>{ singledata.Filename} </h2>
            // <img src= {`data:image/png/jpg/jpeg/mp4;base64, ${base64string} `}alt="" />
                   console.log(base64string) })} */}
                {/* decodeBase64(base64data) {
    let base64ToString = Buffer.from(base64data, "base64").toString()
    this.setState({data: base64ToString })
} */}  

{/* const base64ToString =(Buffer.from(base64string, "base64").toString()) 
setvideo( base64ToString );
          

            <img src={"data:image/jpeg;base64," +video} />   })} */}
         
                   
                               
                {/* //    return <img src= {`data:image/png/jpg/jpeg/mp4;base64, ${base64string} `}alt="" />
                        // return <img src={`data`} alt="" />
                        // <img src="./logo512.png" alt="" />
             */}
         


// const convertTobase64=(singledata)=>{
//     const base64string = btoa  (String.fromCharCode(...new Uint8Array(singledata.file.data.data))
//     );

// }

// const convertTobase64=(file)=>{
//     return new Promise((resolve, reject)=>{
//         const fileReader=new FileReader();
//     fileReader.readAsBinaryString(file)
//     fileReader.onload=()=>{
//         resolve(fileReader.result)
//     };
//     fileReader.onerror=(error)=>{
    
//         reject(error)
//     }
//     })
//        };