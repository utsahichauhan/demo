//4. creact a react pure functional componenet that will take text input and print
//total number of characters

import { useState } from "react";
function Count(){
    const [text, setText] = useState("");
    return(
        <div>
            <input type="text" value={text} onChange={(e)=> setText(e.target.value)}  /><br/>
            <p> Total Character : {text.length}</p>
        </div>
    );
}
export default Count;
