import React from "react";
import ChangeProfile from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

const Profile = () => {
    const { username } = useContext(AppContext);
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Profile: {username}</h1>
            <ChangeProfile />
        </div>
    );
};

export default Profile;
