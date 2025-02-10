import * as React from "react";
import Promise from "bluebird";
Promise.config({cancellation :true});
import { useState, useEffect } from "react";

function Fetchuser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "utsahi" });
        }, 5000);
    });
}

function CancleRequest(){
    const [user, setUser] = useState("loading.....");
    const [id, setId] = useState("loading.....");

    useEffect(() => {
        const promise = Fetchuser().then((var1) => {
            setUser(var1.name);
            setId(var1.id);
        });

        return () => {
            promise.cancel();
        };
    }, []);

    return (
        <div>
            User ID: {id}
            <br />
            User Name: {user}
        </div>
    );
}

export default CancleRequest;