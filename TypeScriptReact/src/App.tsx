import Person from "./components/Person";
import { Country } from "./components/Person";

function App() {
    return (
        <>
            <Person
                name="ThanhKiet"
                email="thanhkiet722000@gmail.com"
                age={25}
                isMarried={false}
                friends={["Spring", "Summer", "Fall"]}
                country={Country.Vietnam}
            />
        </>
    );
}

export default App;
