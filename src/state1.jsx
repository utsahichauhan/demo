import * as React from "react";
class StateExample extends React.Component{
        state = {
            first : true,
            second : false,
            clr : "red",
            txt : "hello"
        };
        constructor(){
            super();
            setTimeout(() => {
                this.setState({
                    first : false,
                    second : true,
                    clr : "blue",
                    txt : "utsahi"
                })
            }, 5000);
        }
        
        render(){
            const{first , second , clr , txt}= this.state;
            return(
                <div>
                    <button disabled={first}>buton1</button><br></br>
                    <button disabled={second}>buton2</button><br></br>
                    <label style={{color:clr}}>{txt}</label>
                </div>
            );
        }
}
export default StateExample;