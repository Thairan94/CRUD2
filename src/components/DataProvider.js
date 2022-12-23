import React, {useEffect, useState, createContext} from "react";


export const DataContext = createContext();

export const DataProvider =  (props) => {
    const [ todos, setTodos] = useState([])

    //LocalStorage
    return (
        <DataContext.Provider value={[todos, setTodos]}>
            {props.children}
        </DataContext.Provider>
    )
}
