import { useContext, createContext, useState, useEffect } from "react";
import { fetchUser } from "../services/user";

const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState('')

    useEffect(() => {
        fetchUser()
          .then((fetchedUser) => {
            setUser(fetchedUser)
          })
          .catch((error) => {
            throw new Error(`Error: ${error}`)
          })
      }, [])
    
    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

const useUser = () => {
    const context = useContext(UserContext)
    if (context === undefined) {
        throw new Error('useUser hook must be called within a UserContext Provider')
    }
    return context
}

export { UserProvider, useUser }