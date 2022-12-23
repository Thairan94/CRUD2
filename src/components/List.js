import React, {useContext} from "react";
import ListItem from "./ListItem";
import { DataContext } from "./DataProvider";
import styled from 'styled-components'

function List() {
    const [todos, setTodos] = useContext(DataContext);

    const switchComplete = id => {
        const newTodos = [...todos]
        newTodos.forEach((todo, index) => {
            if(index === id){
                todo.complete = !todo.complete
            }
            setTodos(newTodos)
        })
    }

    const handleEditTodos = (editvalue, id) => {
        const newTodos = [...todos]
        newTodos.forEach((todo, index) =>{
            if(index === id){
                todo.name = editvalue
            }
        })
        setTodos(newTodos)
    }

    return (
        <Container>
           {
            todos.map((todo, index) => (
                <ListItem todo={todo} key={index} id={index}
                checkComplete={switchComplete}
                handleEditTodos = {handleEditTodos}
                />
            ))
           }
      </Container>  
    )
}
export default List

const Container = styled.ul`
    li {
        list-style: none;
        border: 1px solid #ccc;
        margin: 10px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-transform: capitalize;

        input{
            margin-right: 5px;
            transform: translateY(1px);
        }
        button{
            border: none;
            outline: none;
            background: orange;
            color: white;
            padding: 5px 15px;
            cursor: pointer;
        }
        button:disabled{
            opacity: 0.5;
            cursor: not-allowed;
        }
    }
    li .active{
        opacity: 0.5;
        text-decoration: line-through;
    }
`