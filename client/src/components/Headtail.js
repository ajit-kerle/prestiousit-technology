import react, { useEffect, useState } from "react";

function Headtail() {
  const [seletedOption, setSeletedOption] = useState();
  // const [result, setResult] = useState([
  //   ["H", "T"],
  //   [" ", "T"]
  // ]);
  const [result, setResult] = useState([]);
  function handleChange(event) {
    setSeletedOption(event.target.value);
  }

  const handleClick = () => {
    setResult(() => [...result, { val: seletedOption }]);
  };

  // [[H,T],[' ', T]]
  return (
    <>
      <div className="App">
        
        <h2>Head and tail page</h2>

        <select onChange={(e) => handleChange(e)}>
          <option value="H">H </option>
          <option value="T">T </option>
        </select>

        <button onClick={handleClick}> submit </button>

        {result.map((obj, ind) => (
          <p key={ind}>{obj.val ? <h1>{obj.val} </h1> : <h6>{obj.val}</h6>}</p>
        ))}

        {/* {result.map((arr) =>(
        arr.map((elem, ind) => (
          <p style={{ display: "flex" }} key={ind}>
            {" "}
            {elem}{" "}
          </p>
        ))
      ))} */}
      </div>
    </>
  );
}

export default Headtail;
