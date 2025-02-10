//2. creact a react pure functional componenet that will take email address  as an input and print whether it is a valid email  address or not

import { useState } from "react";

function EmailHandler() {
    const [email, setEmail] = useState(""); 

    const validateEmail = (input) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        return emailRegex.test(input);
    };

    return (
        <div>
            <input 
                type="text" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter email address" 
            />
            <br />
            <p>
                {email === "" 
                    ? "Please enter an email address."
                    : validateEmail(email) 
                    ? "Valid email address"
                    : "Invalid email address"}
            </p>
        </div>
    );
}

export default EmailHandler;
