import React, {useState, useContext} from "react";
import {DataContext} from '../components/DataProvider'
import styled from 'styled-components'

function Footer() {
    const [checkAll, setCheckAll] = useState(false)
    const [todos, setTodos] = useContext(DataContext)

    const handleCheckAll = () => {
        const newTodos = [...todos]
        newTodos.forEach(todo =>{
            todo.complete = !checkAll
        })
        setTodos(newTodos)
        setCheckAll(!checkAll)
    }

    const deleteTodo = () =>{
        const newTodos= todos.filter(todo =>{
            return todo.complete === false
        })
        setTodos(newTodos)
        setCheckAll(false)
    }

    return (
        <Rodape className="row">
            <label htmlFor="all">
            <input type="checkbox" name="all" id="all"
                onClick={handleCheckAll}
                checked={checkAll}
            />
            Selecione todos
            </label>
            <p>Você tem {todos.length} anotações</p>
            <button id="delete" onClick={deleteTodo}>Excluir</button>
        </Rodape>
    )
}
export default Footer

const Rodape = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

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

    #delete{
        background: red;
        transition: 250ms;

        &:hover{
            background: #FF6347;
        }
    }
`