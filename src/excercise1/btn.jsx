// 3.) creact a react pure functional componenet that will toggle the visivility of text written by user take one text box and one button,button woll toggle the when text is visible button text  should be "hide text"
// when text is hidden button text should be "show text"
import { useState } from "react";

function TextToggle() {
    const [text, setText] = useState(""); // State for text input
    const [isVisible, setIsVisible] = useState(true); // State for visibility toggle

    return (
        <div>
            {/* Input field for text */}
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Enter text here" 
            />
            <br />

            {/* Button to toggle visibility */}
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide Text" : "Show Text"}
            </button>
            <br />

            {/* Display text based on visibility */}
            {isVisible && <p>{text}</p>}
        </div>
    );
}

export default TextToggle;
