import { useState, createContext, useContext } from "react";

const AppContext = createContext();
function AppProvider({children}) {
    const [ count, setCount ] = useState(0)
    return (
        <AppContext.Provider value={{count, setCount}}>
            { children }
        </AppContext.Provider>
    )
}
export const UseGlobalContext = () => {
    return useContext(AppContext)
}
export { AppContext, AppProvider }
