import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import React from "react";

const Home = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["store"],
        queryFn: () =>
            axios.get("https://api.thecoffeehouse.com/api/v5/stores/all").then((res) => {
                console.log(res.data);
                res.data;
            }),
    });

    if (isLoading) {
        return <h1>Loading ...</h1>;
    }

    if (isError) {
        return <h1>Error ...</h1>;
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Home page</h1>
            <p style={{ textAlign: "center" }}>{data?.stores.pu_city}</p>
        </div>
    );
};

export default Home;
