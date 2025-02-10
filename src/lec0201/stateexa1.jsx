import { useState } from "react";

function StateExample() {
    const [name, setname] = useState("RKU");
    const [number, setage] = useState(45);
    const [color, setcolor] = useState("white");
    const [isBold, setIsBold] = useState(false);
    // display for Name */


return(
        <div>
            {/* Input andtname(e.target.value)} 
            /><br />
            <h1>{name}</h1><br />

            {/* Input and display for Number */}
              <input 
                value={name} 
                onChange={(e) => setname (e.target.value)}/><br/>
            <input 
                value={number} 
                onChange={(e) => setage(e.target.value)} 
            /><br />
            <h1>{number}</h1>

            {/* Background color controls */}
            <p style={{ background: color }}>Background</p>
            <input 
                type="radio" 
                name="c1" 
                onChange={() => setcolor("blue")} 
            /> Blue
            <input 
                type="radio" 
                name="c1" 
                onChange={() => setcolor("green")} 
            /> Green
            <input 
                type="radio" 
                name="c1" 
                onChange={() => setcolor("yellow")} 
            /> Yellow

            {/* Font bold control */}
            <p style={{ fontWeight: isBold ? "bold" : "normal" }}>Background</p>
            <input 
                type="checkbox" 
                name="cb1" 
                checked={isBold} 
                onChange={(e) => setIsBold(e.target.checked)} 
            /> Make text bold
        </div>
    );
}

export default StateExample;
