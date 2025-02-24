import { useSelector } from "react-redux";

const Home = () => {
    const username = useSelector((state: any) => {
        return state.user.value.username;
    });

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>This is HomePage {username}</h1>
        </div>
    );
};

export default Home;
