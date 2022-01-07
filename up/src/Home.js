import { useState , useEffect } from "react";
import Listblog from "./Listblog";
import Navbar from "./Navbar";


const Home = () => {

  const [datapk,setDatapk]= useState(null)
    useEffect(()=>{
        fetch('http://localhost:8000/post')
    .then(res =>{
         return res.json()
    })
    .then( data =>{
        setDatapk(data)
    })
    },[])
 
  return ( 
    <div>
      <nav><Navbar/></nav>
      <p>{datapk && <Listblog file={datapk}/>}</p>
    </div>
   )
}
 
export default Home;
