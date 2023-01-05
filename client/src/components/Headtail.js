import react,{ useEffect, useState } from "react";


function Headtail() {
  const [value,setValue]=useState("H")
  const handleChange=(event) =>{
    setValue({value: event.target.value});
  }
  
  const handleSubmit=(event)=>{
      setValue({value: event.target.value});
  }
//   useEffect(())
    
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <h1>Head and tail page</h1>
         <form onSubmit={handleSubmit}>
        <label>
          <select value={value} onChange={handleChange}>
            {/* <option selected value="select_something">select something</option> */}
            <option value="T">T</option>
            <option value="H">H</option>
            
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
       <table>
        <thead>
            <tr>
                <th>{value}</th>
            </tr>
        </thead>
       </table>
      </div>
    </>
  );
}

export default Headtail;
