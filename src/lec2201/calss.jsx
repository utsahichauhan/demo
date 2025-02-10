import { useState } from "react";
import CancelRequest from "./cancelrequest";

const SetShow = ({ varx }) => (varx ? <CancelRequest /> : null);
function ReqCancel() {
    const [show, setShow] = useState(false);
    return (
        <>  
            <button onClick={()=>setShow(!show)}>
                {show?"Hide User":"Show User"}
            </button>
            <SetShow varx={show} />  {/* pass show state to SetShow component */}
        </>  
    );
}
export default ReqCancel;