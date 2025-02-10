import { useState } from "react";
import { Promise as BluebirdPromise } from "bluebird";

function Fetchuser() {
    return new BluebirdPromise((resolve) => {
        setTimeout(() => {
            resolve({ name: "John Doe", id: "12345" });
        }, 1000);
    });
}

function CancelReq() {
    const [id, setId] = useState("loading...");
    const [name, setName] = useState("loading...");

    useEffect(() => {
        const userPromise = Fetchuser().then((user) => {
            setName(user.name);
            setId(user.id);
        });

        return () => {
            if (userPromise.cancel) {
                userPromise.cancel(); // Cancel the promise if it's cancellable
            }
        };
    }, []); // Dependency array ensures this runs only on component mount

    return (
        <div>
            User: {name} <br />
            ID: {id} <br />
        </div>
    );
}

export default CancelReq;
