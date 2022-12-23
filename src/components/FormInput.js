import React, {useState, useContext} from "react";
import { DataContext } from "./DataProvider";
import styled from 'styled-components'

function FormInput() {
    const [todos, setTodos] = useContext(DataContext);
    const [todoName, setTodoName] = useState('')

    const addTodo = e =>{
        e.preventDefault();
        setTodos([...todos, {name: todoName, complete: false}])
        setTodoName('')
    }
    return (
        <Formulário autoComplete="off" onSubmit={addTodo}>
            <input type="text" name="todos" id="todos"
            required placeholder="Digite suas anotações"
            value={todoName}
            onChange={e => setTodoName(e.target.value.toLocaleLowerCase())}
            />
            <button type="submit">Criar</button>
      </Formulário>
    )
}
export default FormInput

const Formulário = styled.form`   
  width: 100%;
  height: 40px;
  margin: 20px 0;
  display: flex;

  input, button {
    flex: 3;
    border: none;
    outline: none;
    border-bottom: 1px solid #555;
    margin: 0 5px;
  }
  button {
    flex:1;
    background: #555;
    color: white;
    cursor: pointer;
    transition: 250ms;

    &:hover{
        background: #0000CD;
    }
  }

`