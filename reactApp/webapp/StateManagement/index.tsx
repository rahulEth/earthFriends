"use client"

import React , {createContext, useContext} from 'react'


const StateManagement = createContext<any>({});


export const StateManagementProvider = ({children}: Readonly<{children: React.ReactNode}>): React.JSX.Element => {

    let test: string = "GoodBye World";

  return (

    <StateManagement.Provider value={{test}}>

            {children}

    </StateManagement.Provider>

  )
}

export const UseStateManagement = () => useContext(StateManagement);

