import * as React from "react";
// import Props from "./exa1";
class Mybutton extends React.Component{
    render(){
        const {disabled , text} = this.props;
        return <button disabled = {disabled}>{text}</button>;
    }
}
export default Mybutton;