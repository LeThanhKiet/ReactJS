import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
    const [catFact, setCatFact] = useState("");

    // https://catfact.ninja/fact - url

    // Using fetch() function
    // fetch() - return 1 promise
    // fetch("https://catfact.ninja/fact")
    //     .then((res) => res.json())
    //     .then((data) => console.log(data));

    // Using Axios library
    // axios.get("https://catfact.ninja/fact").then((res) => {
    //     console.log(res.data);
    //     setCatFact(res.data); // With this, useState sẽ re-render lại Component vô hạn lần =>> Sử dụng useEffect()
    // });

    // useEffect(() => {
    //     axios.get("https://catfact.ninja/fact").then((res) => {
    //         console.log(res.data);
    //         setCatFact(res.data.fact);
    //     });
    // }, []);

    const fetchCatFact = () => {
        axios.get("https://catfact.ninja/fact").then((res) => {
            console.log(res.data);
            setCatFact(res.data.fact);
        });
    };

    // with this function, we can:
    useEffect(() => {
        fetchCatFact();
    }, []);

    const [name, setName] = useState("kiet");
    const [predictedAge, setPredictedAge] = useState(25);
    const fetchData = () => {
        axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
            console.log(`Tuổi dự đoán của ${name} là: ${res.data.age}`);
            console.log(res.data);
            setPredictedAge(res.data.age);
        });
    };

    return (
        <div style={{ textAlign: "center" }}>
            <div>
                <h1>Fetch Data from React</h1>
                <button onClick={fetchCatFact}>Generate Cat Fact</button>
                <p>{catFact}</p>
            </div>

            <div>
                <input type="text" placeholder="Example ... KietLe" onChange={(e) => setName(e.target.value)} />
                <button onClick={fetchData}>Predict Age</button>
                <h1>
                    Predicted Age of {name} is: {predictedAge}
                </h1>
                <h2>name: {name}</h2>
                <h2>age: {predictedAge}</h2>
                <h2>count: {}</h2>
            </div>
        </div>
    );
}

export default App;
