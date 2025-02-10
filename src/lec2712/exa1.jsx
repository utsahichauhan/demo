import * as React from "react";
import Mybutton from "./exa2";
import MyList from "./exa3";

class Propsexample extends React.Component{
    state = {
        text: "My button",
        disabled : false ,
        items : ["one","two","three"],
    };
    constructor (){
        super();
        setTimeout(() => {
            this.setState ({
                disabled : false,
                text : " Hello ....",
                items : ["four","five","six"]
            });
        }, 2000);
    }
    render(){
        const { text , disabled , items}= this.state
        return(
            <div>
                <Mybutton text = {text} disabled={disabled} />
                <MyList items = {items}/>
            </div>
        );
    }
}
export default Propsexample;