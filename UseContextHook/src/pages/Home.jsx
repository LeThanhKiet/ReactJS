import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";

const Home = () => {
    const { username } = useContext(AppContext);
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Home page and user name is {username}</h1>
        </div>
    );
};

export default Home;
