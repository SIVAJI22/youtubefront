import React, { useRef, useState } from "react";
import axios from 'axios'
import './fileupload.css'
import { Nav } from "./navbar";
export const Image = () => {
    const [file, setfile] = useState("");

    const [  Description , setDescription  ] = useState('');
    const [Filename, setFilename] = useState("");
    const [resulttext, setresulttext] = useState("");

// const [video,setvideo]=useState("")
// const [videoname,setvideoname]=useState('')
    // const descrip = (e)=>{
    //     const target=e.target
    //     const name= target.name;
    //     const value=target.value;
    //     setdescription({
    //         ...description,[name]:value
    //     })
    
    // }
    const descrip=useRef(null)
    const fileinput = useRef(null);
const videofile=useRef(null)
    
    const savefile = () => {

// setvideo(videofile.current.files[0])
// setvideoname(videofile.current.files[0].name)
        setfile(fileinput.current.files[0])
        setFilename(fileinput.current.files[0].name)
    }
    const savefile2=()=>{
setDescription(descrip.current.value)
    }
    
  
    const onclicking = async () => {
        const formdata = new FormData();
        formdata.append('file', file);
        formdata.append('Filename', Filename);
      formdata.append('Description',Description)
    //   formdata.append('video',video  )
    //   formdata.append('videoname',videoname  )
        // formdata.append(' Description',  Description   )
        // console.log(' file------>,',file);
        console.log(Filename);
console.log(typeof(Description    ));
        try {
           

            const res = await axios.post('http://localhost:5000/U   ', formdata)
console.log(formdata);
            setresulttext(res.data.message);


            setTimeout(() => {
                setresulttext()
            }, 3000);

            fileinput.current.value = ("");



        }
        catch (er) {
            console.log(er);
            if (er.response !== undefined) {

                setresulttext(er.response.data.message)
            }
            else {
                setresulttext("Server error")
            }

            setTimeout(() => {
                setresulttext()
            }, 3000);
        }
    }


    return (
        <div  className="mt-5">

            <Nav />
            <br />
            <div id="inputs" className="container-fluid">
    
            <br /> <br /> <span>upload Your Files</span>
            <input id="file" accept=".jpeg ,  .jpg ,mp4, .png " type="file" ref={fileinput} onChange={savefile} />
            <br />

            <br />
            {/* <input placeholder="upload video" onChange={savefile} accept="mp4" ref={videofile} type="file" /> */}
            <input id="description "  placeholder=" Description"ref={descrip} onChange={savefile2} type="text" />

{/* <input value={Description} name="Description"  onChange ={ e=>setDescription(e.target.value)}type="text" /> */}
          
            <br />
            <button id="upload"onClick={onclicking}>Upload</button>
            {/* <button onClick={onclick}>description

            </button> */}
            {resulttext ? (<p>{resulttext} </p>) : null}
            </div>
        
        </div>
    )
}