"use client"

import React , {createContext, useContext, useState} from 'react'


const StateManagement = createContext<any>({});


export const StateManagementProvider = ({children}: Readonly<{children: React.ReactNode}>): React.JSX.Element => {

    let test: string = "GoodBye World";

    const [selectedItem, setSelectedItem] = useState<string>('');

    const [value , setValue] = useState<string>("0");

    const [loading , setLoading] = useState<boolean>(false);

  return (

    <StateManagement.Provider value={{test , selectedItem , setSelectedItem , value , setValue , loading , setLoading}}>

            {children}

    </StateManagement.Provider>

  )
}

export const UseStateManagement = () => useContext(StateManagement);

