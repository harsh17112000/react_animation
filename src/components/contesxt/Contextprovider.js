import React, { Children, createContext, useState } from 'react'


export const dataContext = createContext();

const Contextprovider = (  {children}) => {

    const [viewdata,setViewdata] = useState("");

  return (
    <>
    <dataContext.Provider value={{viewdata,setViewdata}}>
        {children}
    </dataContext.Provider>
    </>
  )
}

export default Contextprovider