import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { login } from "../redux/slices/userSlice";

const Login = () => {
    const [newUsername, setNewUsername] = useState<string>("");

    const dispatch = useDispatch();

    const username = useSelector((state: any) => state.user.value.username);

    const handleChangeUserName = (e: any) => {
        setNewUsername(e.target.value);
    };

    const handleSubmitLogin = () => {
        dispatch(login({ username: newUsername }));
    };

    return (
        <div>
            <h1>This is Login page: {username}</h1>
            <div>
                <input type="text" placeholder="Enter your name... " onChange={handleChangeUserName} />
                <button onClick={handleSubmitLogin}>Submit Login</button>
                <button>Logout</button>
            </div>
        </div>
    );
};

export default Login;
