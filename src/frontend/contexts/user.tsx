import { useRouter } from 'next/router'
import React, {
    createContext,
    useState,
    useContext,
    SetStateAction,
    Dispatch
} from 'react'
import axios from '../axios'
import { toast } from 'react-toastify'

interface UserContextInterface {
    user: User | null
    setUser: Dispatch<SetStateAction<null>>
    handleLogout(link: string): void
}

const UserContext = createContext<UserContextInterface | null>(null)

export default function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const Router = useRouter()

    const handleLogout = async (replaceLink: string) => {
        try {
            await axios.post('/users/logout')
            setUser(null)
            Router.replace(replaceLink)
            toast.success('Logout realizado com sucesso!')
        } catch (err) {
            Router.replace(replaceLink)
        }
    }

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                handleLogout
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const context = useContext(UserContext)
    if (!context) throw new Error('useUser must be used within a UserProvider')
    const { user, setUser, handleLogout } = context
    return { user, setUser, handleLogout }
}
