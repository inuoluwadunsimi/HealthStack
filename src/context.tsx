import React from 'react'
import {createContext,useEffect,useState} from 'react'
import client from './feathers'

interface UserContextInterface{
    user: any | null
    setUser:any | null
}


const userContext = createContext({} as UserContextInterface)

export const MyUserProvider : React.FC<React.ReactNode> = ({children}) =>{
        const [user,setUser] = useState(null)


        useEffect(()=>{
                    (async () => { try {
                        const resp = await client.reAuthenticate()
            
                        await setUser(resp.user)
            
                        return
                    } catch(error){console.log(error)} })()
                },[])

              
               
                
               
                return(
                    <userContext.Provider value={{user,setUser}}>

                        {children}

                    </userContext.Provider>

                )

}

export default userContext