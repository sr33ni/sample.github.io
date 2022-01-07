
const Listblog = ({file}) => {
   
    return ( 
      <div>
        {file.map((datafile) => (
        <div key={datafile.id}>
            <h1>{datafile.title}</h1>
            <p>review:{datafile.review}</p>
        <button onClick={()=>this.datafile.review}>readmore</button>
        </div>
        ))}
        </div>
     );
}
 
export default Listblog;