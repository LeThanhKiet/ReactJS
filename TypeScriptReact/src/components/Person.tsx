// import { useState } from "react";
import React from "react";
interface Props {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
    country: Country;
}

// enum
export enum Country {
    Vietnam = "Việt Nam",
    US = "United State",
}

const Person: React.FC<Props> = (props: Props) => {
    // const [name, setName] = useState<string>(props.name);

    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Email: {props.email}</h1>
            <h1>Age: {props.age}</h1>
            <h1>This person is {props.isMarried ? "is" : "is not"} MARRIED</h1>
            <h1>Country: {props.country}</h1>
            {props.friends.map((friend: string, index: number) => (
                <h2 key={index}>{friend}</h2>
            ))}
        </div>
    );
};

export default Person;
