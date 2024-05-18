import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";

export default function FetchData() {
    // useState hook to manage the todos state
   
    const {data}=useFetch("https://dummyjson.com/todos");


    // useEffect hook to fetch data on component mount
    

    const Element=
      data && data.map((todo) => (
        <p key={todo.id}>{todo.todo}</p> // Adding a unique key prop
    ))

    return (
        <div>

            {Element}

        </div>
    );

}