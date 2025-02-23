import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

const ChangeProfile = () => {
    const [newUsername, setNewUsername] = useState("");
    const { setUserName } = useContext(AppContext);

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>ChangeProfile</h1>
            <input
                placeholder="enter your new UserName ... "
                onChange={(event) => {
                    setNewUsername(event.target.value);
                }}
            />
            <button onClick={setUserName(newUsername)}>Change UserName</button>
        </div>
    );
};

export default ChangeProfile;
