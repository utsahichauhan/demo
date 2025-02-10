// 1 ) creact a react pure functional componenet that will take 2 number and print addition, subtract and multiplication and division 

import { useState } from "react";

function MathOperations() {
    const [num1, setNum1] = useState(0); // State for the first number
    const [num2, setNum2] = useState(0); // State for the second number

    const performOperation = (operation) => {
        const n1 = parseFloat(num1) || 0;
        const n2 = parseFloat(num2) || 0;
        switch (operation) {
            case "add":
                return n1 + n2;
            case "subtract":
                return n1 - n2;
            case "multiply":
                return n1 * n2;
            case "divide":
                return n2 !== 0 ? n1 / n2 : "Error"; // Avoid division by zero
            default:
                return 0;
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Math Operations</h1>

            {/* Input fields for numbers */}
            <input 
                type="number" 
                value={num1} 
                onChange={(e) => setNum1(e.target.value)} 
                placeholder="Enter first number" 
            />
            <br /><br />
            <input 
                type="number" 
                value={num2} 
                onChange={(e) => setNum2(e.target.value)} 
                placeholder="Enter second number" 
            />
            <br /><br />

            {/* Displaying results for all operations */}
            <div>
                <p>Addition: {performOperation("add")}</p>
                <p>Subtraction: {performOperation("subtract")}</p>
                <p>Multiplication: {performOperation("multiply")}</p>
                <p>Division: {performOperation("divide")}</p>
            </div>
        </div>
    );
}

export default MathOperations;
