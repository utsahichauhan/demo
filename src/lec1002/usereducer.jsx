import {useReducer } from "react";

function fun1(state,action)
{
    switch(action.type)
    {
            case "changeName":
            return {...state , name: action.value};
            case "changeAge":
            return {...state , age: action.value};
            default:
            throw new Error ("unknown action type");
    }
}

export default function Reducer1(){
    const [{name,age},dispatch]=useReducer(fun1,{name : "",age: ""});
    return(
        <>
            <input placeholder="Name" value={name} 
             onChange={(e)=>dispatch({type:"changeName", value :e.target.value})}
            />
            {name}
            <input placeholder="Age" value={age} 
             onChange={(e)=>dispatch({type:"changeAge", value :e.target.value})}
            />
            {age}
        </>
    );
}