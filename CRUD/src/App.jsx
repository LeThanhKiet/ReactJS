import { useState } from "react";
import "./App.css";

function App() {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleChange = (e) => {
        setNewTask(e.target.value);
    };

    const handleAddTodoList = () => {
        // let arr = [];
        // const task = "Do homework";
        // arr.push(task);
        // With useState(), we dont use this
        // we use
        // const newTodoList = [...todoList, newTask]; // spread operator
        //setTodoList(newTodoList);
        // or
        // setTodoList([...todoList, newTask]);

        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
        };

        setTodoList([...todoList, task]);
    };

    const handleRemoveTask = (taskName) => {
        /* 
        const newTodoList = todoList.filter((task) => {
            // if (task === taskName) {
            //     return false;
            // } else {
            //     return true;
            // }
            return task === taskName ? false : true; // or return task !== taskName
        });

        setTodoList(newTodoList);
        */

        setTodoList(todoList.filter((task) => (task === taskName ? false : true)));
        // or
        // setTodoList(todoList.filter((task) => (task !== taskName )));

        // Nếu 2 task cùng tên với nhau, khi click vào button nó sẽ xóa cả 2 đi, điều đó k tốt
        // ==> giải pháp: Lưu các task dưới dạng obj { id: "", taskName: "" } vào mảng todoList thay vì string
        //                như trước
    };

    const handleRemoveTaskkk = (id) => {
        setTodoList(todoList.filter((task) => (task.id === id ? false : true)));
    };
    return (
        <div style={{ textAlign: "center" }}>
            <div className="addTask">
                <input type="text" onChange={handleChange} />
                <button onClick={handleAddTodoList}>ADD TASK</button>
            </div>

            <div className="list">
                {/* WITH State todoList is a string task name */}

                {/* {todoList.map((item, index) => {
                    return (
                        <div style={{ display: "flex" }}>
                            <h2 key={index}>{item}</h2>
                            <button onClick={() => handleRemoveTask(item)}> X </button>
                        </div>
                    );
                })} */}

                {todoList.map((item, index) => {
                    return (
                        <div style={{ display: "flex" }}>
                            <h2 key={index}>{item.taskName}</h2>
                            <button onClick={() => handleRemoveTaskkk(item.id)}> X </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
