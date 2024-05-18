import React, { useEffect, useState } from "react";

export default function DataFetch() {
    // useState hook to manage the todos state
    const [todos, setTodos] = useState([]);

    // useEffect hook to fetch data on component mount
    useEffect(() => {
        fetch("https://dummyjson.com/todos")
            .then((res) => res.json())
            .then((data) => {
                setTodos(data.todos); // Adjust to access the 'todos' property from the fetched data
            })
            .catch((error) => console.error('Error fetching todos:', error));
    }, []);

    const Element=
      todos.map((todo) => (
        <p key={todo.id}>{todo.todo}</p> // Adding a unique key prop
    ))

    return (
        <div>

            {Element}

        </div>
    );
}
